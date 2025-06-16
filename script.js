const temas = {
  geografia: {
    titulo: "🌍 Quiz de Geografia",
    perguntas: [
      {
        pergunta: "Qual é o maior deserto do mundo?",
        respostas: ["Saara", "Atacama", "Antártida", "Gobi"],
        correta: 2
      },
      {
        pergunta: "Qual país tem mais ilhas no mundo?",
        respostas: ["Brasil", "Canadá", "Suécia", "Japão"],
        correta: 2
      }
    ]
  },
  historia: {
    titulo: "🏛️ Quiz de História",
    perguntas: [
      {
        pergunta: "Quem descobriu o Brasil?",
        respostas: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Dom Pedro I", "Vasco da Gama"],
        correta: 1
      },
      {
        pergunta: "Em que ano começou a 2ª Guerra Mundial?",
        respostas: ["1939", "1914", "1945", "1929"],
        correta: 0
      }
    ]
  },
  matematica: {
    titulo: "📐 Quiz de Matemática",
    perguntas: [
      {
        pergunta: "Quanto é 7 x 8?",
        respostas: ["54", "56", "64", "58"],
        correta: 1
      },
      {
        pergunta: "Qual é a raiz quadrada de 81?",
        respostas: ["7", "8", "9", "10"],
        correta: 2
      }
    ]
  },
  ingles: {
    titulo: "🗣️ Quiz de Inglês",
    perguntas: [
      {
        pergunta: "Como se diz 'cachorro' em inglês?",
        respostas: ["Cat", "Dog", "Cow", "Fox"],
        correta: 1
      },
      {
        pergunta: "O que significa 'blue'?",
        respostas: ["Verde", "Amarelo", "Azul", "Roxo"],
        correta: 2
      }
    ]
  }
};

let temaSelecionado;
let perguntas;
let perguntaAtual = 0;
let pontuacao = 0;

function getTema() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tema");
}

function iniciarQuiz() {
  const tema = getTema();
  if (!temas[tema]) {
    document.getElementById("quiz-title").textContent = "Tema inválido.";
    return;
  }

  temaSelecionado = temas[tema];
  perguntas = temaSelecionado.perguntas;
  document.getElementById("quiz-title").textContent = temaSelecionado.titulo;
  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntas[perguntaAtual];
  document.getElementById("question").textContent = q.pergunta;
  const divRespostas = document.getElementById("answers");
  divRespostas.innerHTML = "";

  q.respostas.forEach((resp, i) => {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.textContent = resp;
    div.onclick = () => verificarResposta(i);
    divRespostas.appendChild(div);
  });

  document.getElementById("next-btn").style.display = "none";
  document.getElementById("score").textContent = "";
}

function verificarResposta(i) {
  const correta = perguntas[perguntaAtual].correta;
  const respostas = document.querySelectorAll(".answer");

  respostas.forEach((el, idx) => {
    el.style.backgroundColor = idx === correta ? "#2ecc71" : "#e74c3c";
    el.onclick = null;
  });

  if (i === correta) pontuacao++;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h2>Fim do Quiz!</h2>";
    document.getElementById("score").textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  }
}

window.onload = () => {
  if (window.location.pathname.includes("quiz.html")) {
    iniciarQuiz();
  }
};
