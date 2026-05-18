const questions = [
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1,
    explanation: "Saturn recently overtook Jupiter as the planet with the most moons in our solar system, with over 140 discovered so far."
  },
  {
    question: "What is the closest star to Earth?",
    options: ["Proxima Centauri", "Sirius", "The Sun", "Betelgeuse"],
    answer: 2,
    explanation: "The Sun is the closest star to Earth, at an average distance of about 93 million miles (150 million km)."
  },
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1,
    explanation: "Even though Mercury is closer to the Sun, Venus is hotter due to a thick atmosphere of carbon dioxide that creates a runaway greenhouse effect."
  },
  {
    question: "What phenomenon causes the phases of the Moon?",
    options: ["Earth's shadow falling on the Moon", "The Moon's rotation on its axis", "The changing angle of sunlight reflecting off the Moon as it orbits Earth", "Clouds blocking the Moon"],
    answer: 2,
    explanation: "Moon phases are caused by the changing angle from which we see the sunlit portion of the Moon as it orbits Earth."
  },
  {
    question: "What is the largest moon in the solar system?",
    options: ["Titan", "Ganymede", "Callisto", "Europa"],
    answer: 1,
    explanation: "Jupiter's moon Ganymede is the largest in the solar system, even larger than the planet Mercury."
  },
  {
    question: "Which of these is not a type of galaxy?",
    options: ["Spiral", "Elliptical", "Irregular", "Triangular"],
    answer: 3,
    explanation: "Galaxies are generally classified as spiral, elliptical, or irregular. There is no 'triangular' classification."
  },
  {
    question: "What marks the boundary around a black hole beyond which nothing can escape?",
    options: ["Event Horizon", "Accretion Disk", "Singularity", "Photon Sphere"],
    answer: 0,
    explanation: "The event horizon is the boundary defining the region of space around a black hole from which nothing, not even light, can escape."
  },
  {
    question: "How long does it take for light from the Sun to reach Earth?",
    options: ["1 second", "8 minutes", "1 hour", "24 hours"],
    answer: 1,
    explanation: "It takes sunlight an average of 8 minutes and 20 seconds to travel the 93 million miles to Earth."
  },
  {
    question: "What is the name of the first artificial Earth satellite?",
    options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"],
    answer: 2,
    explanation: "Sputnik 1 was launched into an elliptical low Earth orbit by the Soviet Union on 4 October 1957."
  },
  {
    question: "Which constellation contains the North Star (Polaris)?",
    options: ["Ursa Major", "Ursa Minor", "Orion", "Cassiopeia"],
    answer: 1,
    explanation: "Polaris, the North Star, is located at the end of the handle of the Little Dipper asterism, which is part of the constellation Ursa Minor."
  }
];

let currentScore = 0;
let currentQuestionIndex = 0;
let highScore = localStorage.getItem('astroquiz_highscore') || 0;
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

function initGame() {
  highScoreEl.textContent = highScore;
  currentScore = 0;
  currentScoreEl.textContent = currentScore;
  
  // Shuffle questions and pick 10
  activeQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  currentQuestionIndex = 0;
  
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
  
  // highlight correct answer
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
    localStorage.setItem('astroquiz_highscore', highScore);
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

// Initialize on load
document.addEventListener('DOMContentLoaded', initGame);
