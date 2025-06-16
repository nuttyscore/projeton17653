const quizzes = {
  historia: [
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: ["Dom Pedro II", "Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek"],
      correta: 1
    },
    {
      pergunta: "Em que ano aconteceu a Proclamação da República?",
      respostas: ["1822", "1889", "1500", "1988"],
      correta: 1
    }
  ],
  geografia: [
    {
      pergunta: "Qual é o maior país do mundo em território?",
      respostas: ["Estados Unidos", "Brasil", "China", "Rússia"],
      correta: 3
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
      correta: 2
    }
  ],
  portugues: [
    {
      pergunta: "Qual a classe gramatical da palavra 'rapidamente'?",
      respostas: ["Verbo", "Substantivo", "Adjetivo", "Advérbio"],
      correta: 3
    },
    {
      pergunta: "Qual é o antônimo de 'feliz'?",
      respostas: ["Triste", "Rico", "Alto", "Doente"],
      correta: 0
    }
  ],
  matematica: [
    {
      pergunta: "Quanto é 7 x 8?",
      respostas: ["54", "56", "64", "58"],
      correta: 1
    },
    {
      pergunta: "Qual é a raiz quadrada de 81?",
      respostas: ["8", "9", "10", "7"],
      correta: 1
    }
  ]
};

const params = new URLSearchParams(window.location.search);
let tema = params.get("tema");
let perguntas = quizzes[tema];
let indice = 0;
let pontos = 0;

const titulo = document.getElementById("titulo");
const pergunta = document.getElementById("question");
const respostas = document.getElementById("answers");
const resultado = document.getElementById("result");
const btnProxima = document.getElementById("next");
const btnVoltar = document.getElementById("voltar");
const btnProximoQuiz = document.getElementById("next-quiz");

titulo.innerText = `Tema: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;

function carregarPergunta() {
  const q = perguntas[indice];
  pergunta.innerText = q.pergunta;
  respostas.innerHTML = "";

  q.respostas.forEach((resposta, i) => {
    const btn = document.createElement("button");
    btn.classList.add("answer");
    btn.innerText = resposta;
    btn.onclick = () => selecionar(i);
    respostas.appendChild(btn);
  });

  btnProxima.style.display = "none";
}

function selecionar(i) {
  const q = perguntas[indice];
  const todasRespostas = document.querySelectorAll("#answers .answer");
  todasRespostas.forEach((btn, index) => {
    btn.style.pointerEvents = "none";
    btn.style.backgroundColor = index === q.correta ? "#00e676" : "#e60000";
  });

  if (i === q.correta) pontos++;
  indice++;
  btnProxima.style.display = "inline-block";
}

function nextQuestion() {
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  resultado.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
  btnVoltar.style.display = "inline-block";

  const temas = Object.keys(quizzes);
  const proximo = (temas.indexOf(tema) + 1) % temas.length;
  btnProximoQuiz.style.display = "inline-block";
  btnProximoQuiz.setAttribute("data-tema", temas[proximo]);
}

function proximoQuiz() {
  const proximoTema = btnProximoQuiz.getAttribute("data-tema");
  window.location.href = `quiz.html?tema=${proximoTema}`;
}

carregarPergunta();
