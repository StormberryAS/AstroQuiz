import { questions } from './questions.js';

const QUESTIONS_PER_GAME = 10;
const RECENT_SEEN_LIMIT = 30;
const HIGHSCORE_KEY = 'astroquiz_highscore';
const RECENT_SEEN_KEY = 'astroquiz_recent_seen_ids';
const DIFFICULTY_KEY = 'astroquiz_difficulty';
const VALID_DIFFICULTIES = ['all', 'easy', 'medium', 'hard'];

let currentScore = 0;
let currentQuestionIndex = 0;
let highScore = Number(localStorage.getItem(HIGHSCORE_KEY)) || 0;
let activeQuestions = [];
let currentDifficulty = loadDifficulty();

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');
const currentScoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const questionNumberEl = document.getElementById('question-number');
const difficultySelector = document.getElementById('difficulty-selector');

function loadDifficulty() {
  const stored = localStorage.getItem(DIFFICULTY_KEY);
  return VALID_DIFFICULTIES.includes(stored) ? stored : 'all';
}

function saveDifficulty(value) {
  try {
    localStorage.setItem(DIFFICULTY_KEY, value);
  } catch {
    // localStorage may be unavailable in private browsing; silently degrade.
  }
}

function loadRecentSeen() {
  try {
    const raw = localStorage.getItem(RECENT_SEEN_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecentSeen(ids) {
  try {
    const trimmed = ids.slice(-RECENT_SEEN_LIMIT);
    localStorage.setItem(RECENT_SEEN_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage may be unavailable in private browsing; silently degrade.
  }
}

function shuffle(array) {
  const out = [...array];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function questionsForDifficulty(difficulty) {
  if (difficulty === 'all') return questions;
  return questions.filter(q => q.difficulty === difficulty);
}

function pickQuestionsForGame() {
  const tier = questionsForDifficulty(currentDifficulty);
  const recent = loadRecentSeen();
  const recentSet = new Set(recent);
  let pool = tier.filter(q => !recentSet.has(q.id));

  // If the unseen pool inside the chosen tier has fewer than ten questions,
  // fall back to the full tier. We do not clear recent-seen here because
  // some tiers are small (Hard has 20) and clearing global recent would
  // affect other tiers unfairly. Repeats inside a tier are acceptable.
  if (pool.length < QUESTIONS_PER_GAME) {
    pool = tier;
  }

  const picked = shuffle(pool).slice(0, QUESTIONS_PER_GAME);

  // Update the global recent-seen list with the ids we just picked.
  const updated = loadRecentSeen().concat(picked.map(q => q.id));
  saveRecentSeen(updated);

  return picked;
}

function renderDifficultySelector() {
  const buttons = difficultySelector.querySelectorAll('.difficulty-btn');
  buttons.forEach(btn => {
    const isActive = btn.dataset.difficulty === currentDifficulty;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function setDifficulty(value) {
  if (!VALID_DIFFICULTIES.includes(value) || value === currentDifficulty) return;
  currentDifficulty = value;
  saveDifficulty(value);
  renderDifficultySelector();
  initGame();
}

function initGame() {
  highScoreEl.textContent = highScore;
  currentScore = 0;
  currentScoreEl.textContent = currentScore;
  currentQuestionIndex = 0;
  activeQuestions = pickQuestionsForGame();
  loadQuestion();
}

function loadQuestion() {
  feedbackContainer.className = 'feedback-hidden';
  optionsContainer.innerHTML = '';
  optionsContainer.classList.remove('disabled');

  const q = activeQuestions[currentQuestionIndex];
  questionNumberEl.textContent = currentQuestionIndex + 1;
  questionText.textContent = q.question;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(idx, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, btnElement) {
  optionsContainer.classList.add('disabled');
  const q = activeQuestions[currentQuestionIndex];

  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons[q.answer].classList.add('correct');

  if (selectedIndex === q.answer) {
    btnElement.classList.add('correct');
    currentScore += 100;
    currentScoreEl.textContent = currentScore;
    feedbackText.textContent = 'Correct! 🌟';
    feedbackText.style.color = 'var(--accent-blue)';
  } else {
    btnElement.classList.add('wrong');
    feedbackText.textContent = 'Incorrect 🌠';
    feedbackText.style.color = '#ff6b6b';
  }

  if (currentScore > highScore) {
    highScore = currentScore;
    try {
      localStorage.setItem(HIGHSCORE_KEY, String(highScore));
    } catch {
      // silently degrade if localStorage is unavailable
    }
    highScoreEl.textContent = highScore;
  }

  feedbackExplanation.textContent = q.explanation;
  feedbackContainer.className = 'feedback-visible';

  if (currentQuestionIndex === activeQuestions.length - 1) {
    nextBtn.textContent = 'Play Again';
  } else {
    nextBtn.textContent = 'Next Question';
  }
}

nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex === activeQuestions.length - 1) {
    initGame();
  } else {
    currentQuestionIndex++;
    loadQuestion();
  }
});

difficultySelector.addEventListener('click', (event) => {
  const btn = event.target.closest('.difficulty-btn');
  if (!btn) return;
  setDifficulty(btn.dataset.difficulty);
});

document.addEventListener('DOMContentLoaded', () => {
  renderDifficultySelector();
  initGame();
});
