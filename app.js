/*! app.js is compiled from ts/app.ts by tools/build-ts.sh, which leaves out every comment but
    this one: the explanations are in the source. Edit the TypeScript, never the .js: the build
    refuses to overwrite a hand edit, and its check mode fails on one. */
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
function $(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`missing #${id}`);
    return el;
}
function must(value, what) {
    if (value === undefined)
        throw new Error(`missing: ${what}`);
    return value;
}
const questionText = $('question-text');
const optionsContainer = $('options-container');
const feedbackContainer = $('feedback-container');
const feedbackText = $('feedback-text');
const feedbackExplanation = $('feedback-explanation');
const nextBtn = $('next-btn');
const currentScoreEl = $('current-score');
const highScoreEl = $('high-score');
const questionNumberEl = $('question-number');
const difficultySelector = $('difficulty-selector');
function isMode(value) {
    return VALID_DIFFICULTIES.includes(value);
}
function loadDifficulty() {
    const stored = localStorage.getItem(DIFFICULTY_KEY);
    return isMode(stored) ? stored : 'all';
}
function saveDifficulty(value) {
    try {
        localStorage.setItem(DIFFICULTY_KEY, value);
    }
    catch {
    }
}
function loadRecentSeen() {
    try {
        const raw = localStorage.getItem(RECENT_SEEN_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    }
    catch {
        return [];
    }
}
function saveRecentSeen(ids) {
    try {
        const trimmed = ids.slice(-RECENT_SEEN_LIMIT);
        localStorage.setItem(RECENT_SEEN_KEY, JSON.stringify(trimmed));
    }
    catch {
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
    if (difficulty === 'all')
        return questions;
    return questions.filter(q => q.difficulty === difficulty);
}
function pickQuestionsForGame() {
    const tier = questionsForDifficulty(currentDifficulty);
    const recent = loadRecentSeen();
    const recentSet = new Set(recent);
    let pool = tier.filter(q => !recentSet.has(q.id));
    if (pool.length < QUESTIONS_PER_GAME) {
        pool = tier;
    }
    const picked = shuffle(pool).slice(0, QUESTIONS_PER_GAME);
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
    if (!isMode(value) || value === currentDifficulty)
        return;
    currentDifficulty = value;
    saveDifficulty(value);
    renderDifficultySelector();
    initGame();
}
function initGame() {
    highScoreEl.textContent = String(highScore);
    currentScore = 0;
    currentScoreEl.textContent = String(currentScore);
    currentQuestionIndex = 0;
    activeQuestions = pickQuestionsForGame();
    loadQuestion();
}
function loadQuestion() {
    feedbackContainer.className = 'feedback-hidden';
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('disabled');
    const q = must(activeQuestions[currentQuestionIndex], 'the current question');
    questionNumberEl.textContent = String(currentQuestionIndex + 1);
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
    const q = must(activeQuestions[currentQuestionIndex], 'the current question');
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    must(buttons[q.answer], 'the right option').classList.add('correct');
    if (selectedIndex === q.answer) {
        btnElement.classList.add('correct');
        currentScore += 100;
        currentScoreEl.textContent = String(currentScore);
        feedbackText.textContent = 'Correct! 🌟';
        feedbackText.style.color = 'var(--accent-blue)';
    }
    else {
        btnElement.classList.add('wrong');
        feedbackText.textContent = 'Incorrect 🌠';
        feedbackText.style.color = '#ff6b6b';
    }
    if (currentScore > highScore) {
        highScore = currentScore;
        try {
            localStorage.setItem(HIGHSCORE_KEY, String(highScore));
        }
        catch {
        }
        highScoreEl.textContent = String(highScore);
    }
    feedbackExplanation.textContent = q.explanation;
    feedbackContainer.className = 'feedback-visible';
    if (currentQuestionIndex === activeQuestions.length - 1) {
        nextBtn.textContent = 'Play Again';
    }
    else {
        nextBtn.textContent = 'Next Question';
    }
}
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex === activeQuestions.length - 1) {
        initGame();
    }
    else {
        currentQuestionIndex++;
        loadQuestion();
    }
});
difficultySelector.addEventListener('click', (event) => {
    const btn = event.target.closest('.difficulty-btn');
    if (!btn)
        return;
    setDifficulty(btn.dataset.difficulty);
});
document.addEventListener('DOMContentLoaded', () => {
    renderDifficultySelector();
    initGame();
});
