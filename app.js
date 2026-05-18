import { questions } from './questions.js';

const QUESTIONS_PER_GAME = 10;
const RECENT_SEEN_LIMIT = 30;
const HIGHSCORE_KEY = 'astroquiz_highscore';
const RECENT_SEEN_KEY = 'astroquiz_recent_seen_ids';

let currentScore = 0;
let currentQuestionIndex = 0;
let highScore = Number(localStorage.getItem(HIGHSCORE_KEY)) || 0;
let activeQuestions = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');
const currentScoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const questionNumberEl = document.getElementById('question-number');

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

function pickQuestionsForGame() {
  const recent = loadRecentSeen();
  const recentSet = new Set(recent);
  let pool = questions.filter(q => !recentSet.has(q.id));

  // If too few unseen questions remain, reset the memory so the player keeps
  // getting full ten-question games. Without this the pool could starve and
  // a game would have fewer than ten questions.
  if (pool.length < QUESTIONS_PER_GAME) {
    pool = questions;
    saveRecentSeen([]);
  }

  const picked = shuffle(pool).slice(0, QUESTIONS_PER_GAME);

  // Record the ids we just picked so the next game avoids them.
  const updated = loadRecentSeen().concat(picked.map(q => q.id));
  saveRecentSeen(updated);

  return picked;
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

document.addEventListener('DOMContentLoaded', initGame);
