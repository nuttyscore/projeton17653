const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let currentTheme = new URLSearchParams(window.location.search).get("tema");

let questions = getQuestions(currentTheme);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  startTimer();
  showQuestion();
}

function startTimer() {
  timeLeft = 60;
  timerElement.innerText = `⏱️ Tempo restante: ${timeLeft}s`;

  const timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `⏱️ Tempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("⏰ Tempo esgotado! Reiniciando o quiz...");
      window.location.href = "index.html";
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, isCorrect) {
  const buttons = answerButtons.children;
  for (let btn of buttons) {
    btn.disabled = true;
    if (btn.innerHTML === button.innerHTML) {
      btn.classList.add(isCorrect ? "correct" : "incorrect");
    }
  }

  if (isCorrect) score++;
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (++currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `✅ Você acertou ${score} de ${questions.length} questões!`;
  nextButton.innerHTML = "Reiniciar";
  nextButton.style.display = "block";
  nextButton.onclick = () => window.location.href = "index.html";
}

startQuiz();
