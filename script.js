const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get("tema");
const dificil = urlParams.get("dificil") === "true";

document.getElementById("tema").textContent = "Tema: " + tema + (dificil ? " (Modo Difícil)" : "");

const perguntas = {
  matematica: [
    { pergunta: "Quanto é 2 + 2?", respostas: ["3", "4", "5", "6"], correta: 1 },
    { pergunta: "Quanto é 5 x 3?", respostas: ["15", "10", "20", "8"], correta: 0 },
    { pergunta: "Qual o resultado de 12 ÷ 4?", respostas: ["2", "3", "4", "6"], correta: 1 },
    { pergunta: "Qual a raiz quadrada de 81?", respostas: ["7", "8", "9", "10"], correta: 2 },
    { pergunta: "Quanto é 10²?", respostas: ["100", "20", "10", "200"], correta: 0 },
    { pergunta: "Qual é o valor de π (pi) aproximado?", respostas: ["3.14", "2.71", "1.62", "1.41"], correta: 0 }
  ],
  matematica_dificil: [
    { pergunta: "Qual a derivada de x²?", respostas: ["2x", "x", "x²", "1"], correta: 0 },
    { pergunta: "Quanto é o log de 100 na base 10?", respostas: ["1", "2", "10", "100"], correta: 1 },
    { pergunta: "Quanto é a integral de 1/x?", respostas: ["x", "ln|x|", "1/x²", "x²"], correta: 1 },
    { pergunta: "Qual a fórmula da área de um círculo?", respostas: ["2πr", "πr²", "πd", "r²/π"], correta: 1 },
    { pergunta: "Quanto é 3 elevado à 4ª potência?", respostas: ["27", "81", "12", "64"], correta: 1 }
  ]
};

let quizAtual = perguntas[tema + (dificil ? "_dificil" : "")];
let perguntaAtual = 0;
let pontuacao = 0;
let tempo = 30;
let intervalo;

function mostrarPergunta() {
  if (perguntaAtual >= quizAtual.length) {
    document.getElementById("pergunta").textContent = "Fim do quiz!";
    document.getElementById("respostas").innerHTML = "";
    clearInterval(intervalo);
    return;
  }

  document.getElementById("pergunta").textContent = quizAtual[perguntaAtual].pergunta;
  const respostasContainer = document.getElementById("respostas");
  respostasContainer.innerHTML = "";

  quizAtual[perguntaAtual].respostas.forEach((resposta, index) => {
    const botao = document.createElement("button");
    botao.textContent = resposta;
    botao.onclick = () => verificarResposta(index);
    respostasContainer.appendChild(botao);
  });

  tempo = 30;
  document.getElementById("timer").textContent = `⏳ Tempo: ${tempo}`;
  clearInterval(intervalo);
  intervalo = setInterval(atualizarTempo, 1000);
}

function atualizarTempo() {
  tempo--;
  document.getElementById("timer").textContent = `⏳ Tempo: ${tempo}`;
  if (tempo <= 0) {
    clearInterval(intervalo);
    perguntaAtual++;
    mostrarPergunta();
  }
}

function verificarResposta(respostaSelecionada) {
  clearInterval(intervalo);
  const correta = quizAtual[perguntaAtual].correta;
  if (respostaSelecionada === correta) {
    pontuacao++;
  }

  document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
  perguntaAtual++;
  mostrarPergunta();
}

mostrarPergunta();
