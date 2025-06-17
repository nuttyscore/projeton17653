let perguntas = todasAsPerguntas; // do quiz.js
let indice = 0;
let pontuacao = 0;
let tempo = 120;
let intervalo;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");
const temporizadorEl = document.getElementById("temporizador");
const resultadoEl = document.getElementById("resultado");
const pontuacaoEl = document.getElementById("pontuacao");

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    tempo--;
    temporizadorEl.textContent = `⏱ Tempo: ${tempo}s`;
    if (tempo <= 0) {
      clearInterval(intervalo);
      finalizarQuiz();
    }
  }, 1000);
}

function mostrarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = atual.pergunta;
  opcoesEl.innerHTML = "";
  feedbackEl.textContent = "";

  atual.opcoes.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarResposta(op);
    opcoesEl.appendChild(btn);
  });
}

function verificarResposta(escolhida) {
  const correta = perguntas[indice].resposta;
  if (escolhida === correta) {
    pontuacao++;
    feedbackEl.textContent = "✅ Mandou bem!";
  } else {
    feedbackEl.textContent = `❌ Errou! Resposta certa: ${correta}`;
  }

  indice++;
  if (indice < perguntas.length) {
    setTimeout(mostrarPergunta, 1000);
  } else {
    setTimeout(finalizarQuiz, 1000);
  }
}

function finalizarQuiz() {
  clearInterval(intervalo);
  perguntaEl.textContent = "";
  opcoesEl.innerHTML = "";
  temporizadorEl.textContent = "⏱ Tempo esgotado ou perguntas acabaram!";
  resultadoEl.classList.remove("hidden");
  pontuacaoEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

function recarregarQuiz() {
  indice = 0;
  pontuacao = 0;
  tempo = 120;
  resultadoEl.classList.add("hidden");
  iniciarTemporizador();
  mostrarPergunta();
}

window.onload = () => {
  perguntas = embaralhar([...todasAsPerguntas]);
  iniciarTemporizador();
  mostrarPergunta();
};

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}
