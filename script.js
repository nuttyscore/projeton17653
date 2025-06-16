const questions = [
  {
    question: "Qual é o maior país do mundo em extensão territorial?",
    answers: ["China", "Brasil", "Rússia", "Canadá"],
    correct: 2
  },
  {
    question: "Quantos estados tem o Brasil?",
    answers: ["26", "25", "27", "24"],
    correct: 2
  },
  {
    question: "Qual é o rio mais extenso do mundo?",
    answers: ["Nilo", "Amazonas", "Mississippi", "Yangtzé"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("div");
    btn.textContent = answer;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("score").textContent = "";
}

function checkAnswer(index) {
  const isCorrect = index === questions[currentQuestion].correct;
  if (isCorrect) score++;
  const answers = document.querySelectorAll(".answer");
  answers.forEach((el, i) => {
    el.style.backgroundColor = i === questions[currentQuestion].correct ? "#2ecc71" : "#e74c3c";
    el.onclick = null;
  });
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h2>Parabéns!</h2>";
    document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  }
}

window.onload = showQuestion;

