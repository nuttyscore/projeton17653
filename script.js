// script.js
const quizzes = {
  matematica: [
    { pergunta: "Quanto é 2 + 2?", respostas: ["3", "4", "5", "6"], correta: 1 },
    { pergunta: "Quanto é 5 x 3?", respostas: ["15", "10", "20", "8"], correta: 0 }
  ],
  portugues: [
    { pergunta: "Qual é o plural de pão?", respostas: ["pães", "pãos", "pãezinhos", "pãons"], correta: 0 },
    { pergunta: "Qual dessas palavras é um advérbio?", respostas: ["rápido", "correndo", "devagar", "andar"], correta: 2 }
  ]
  // Adicione mais temas aqui...
};

let tema = new URLSearchParams(window.location.search).get("tema");
let perguntas = quizzes[tema];
let indice = 0;
let pontos = 0;

const titulo = document.getElementById("quiz-title");
const pergunta = document.getElementById("question");
const respostas = document.getElementById("answers");
const score = document.getElementById("score");
const btnProxima = document.getElementById("next-btn");
const btnVoltar = document.getElementById("back-btn");
const btnProximoQuiz = document.getElementById("next-quiz-btn");

if (!perguntas) {
  titulo.innerText = "Tema não encontrado.";
  btnProxima.style.display = "none";
  return;
}

titulo.innerText = `Tema: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
carregarPergunta();

function carregarPergunta() {
  const q = perguntas[indice];
  pergunta.innerText = q.pergunta;
  respostas.innerHTML = "";
  q.respostas.forEach((resposta, i) => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.innerText = resposta;
    btn.onclick = () => selecionar(i);
    respostas.appendChild(btn);
  });
  btnProxima.style.display = "none";
}

function selecionar(i) {
  const q = perguntas[indice];
  if (i === q.correta) pontos++;
  indice++;
  btnProxima.style.display = "inline-block";
}

function nextQuestion() {
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    pergunta.innerText = "Quiz finalizado!";
    respostas.innerHTML = "";
    score.innerText = `Você acertou ${pontos} de ${perguntas.length}`;
    btnProxima.style.display = "none";
    btnVoltar.style.display = "inline-block";
    btnProximoQuiz.style.display = "inline-block";
  }
}

function proximoQuiz() {
  const temas = Object.keys(quizzes);
  let atual = temas.indexOf(tema);
  let proximo = (atual + 1) % temas.length;
  window.location.href = `quiz.html?tema=${temas[proximo]}`;
}
