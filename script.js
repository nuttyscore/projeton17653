const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const btnNext = document.getElementById("btn-next");
const btnFinish = document.getElementById("btn-finish");
const btnBack = document.getElementById("btn-back");

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {
    const quizName = card.getAttribute("data-quiz");
    startQuiz(quizName);
  });
});

btnBack.addEventListener("click", () => {
  resetQuiz();
  quizContainer.classList.add("hidden");
  container.classList.remove("hidden");
  document.body.style.background = "#f0f0f0";
});

btnNext.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    btnNext.classList.add("hidden");
    btnFinish.classList.remove("hidden");
  }
  btnNext.classList.add("hidden");
});

btnFinish.addEventListener("click", () => {
  alert(`Você terminou o quiz!\nPontuação: ${score} de ${currentQuiz.length}`);
  resetQuiz();
  quizContainer.classList.add("hidden");
  container.classList.remove("hidden");
  document.body.style.background = "#f0f0f0";
});

function startQuiz(quizName) {
  currentQuiz = quizzes[quizName];
  currentQuestionIndex = 0;
  score = 0;
  container.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  setBackgroundByQuiz(quizName);
  showQuestion();
}

function setBackgroundByQuiz(quizName) {
  switch (quizName) {
    case "matematica":
      document.body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
      break;
    case "historia":
      document.body.style.background = "linear-gradient(135deg, #f7971e, #ffd200)";
      break;
    case "biologia":
      document.body.style.background = "linear-gradient(135deg, #43cea2, #185a9d)";
      break;
    case "literatura":
      document.body.style.background = "linear-gradient(135deg, #ee9ca7, #ffdde1)";
      break;
    default:
      document.body.style.background = "#f0f0f0";
  }
}

function showQuestion() {
  btnNext.classList.add("hidden");
  btnFinish.classList.add("hidden");
  clearAnswers();
  const currentQuestion = currentQuiz[currentQuestionIndex];
  questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer, i) => {
    const li = document.createElement("li");
    li.textContent = answer.text;
    li.addEventListener("click", () => selectAnswer(li, answer.correct));
    answersEl.appendChild(li);
  });
}

function clearAnswers() {
  answersEl.innerHTML = "";
}

function selectAnswer(selectedLi, correct) {
  const allLis = answersEl.querySelectorAll("li");
  allLis.forEach(li => {
    li.classList.remove("selected");
    li.style.pointerEvents = "none";
  });
  selectedLi.classList.add("selected");
  if (correct) {
    score++;
  }
  if (currentQuestionIndex < currentQuiz.length - 1) {
    btnNext.classList.remove("hidden");
  } else {
    btnFinish.classList.remove("hidden");
  }
}
function resetQuiz() {
  currentQuiz = [];
  currentQuestionIndex = 0;
  score = 0;
  clearAnswers();
  questionEl.textContent = "";
  btnNext.classList.add("hidden");
  btnFinish.classList.add("hidden");
}
