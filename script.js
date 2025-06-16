const quizzes = {
  matematica: [
    {
      pergunta: "Quanto é 2 + 2?",
      respostas: ["3", "4", "5", "6"],
      correta: 1
    },
    {
      pergunta: "Quanto é 5 x 3?",
      respostas: ["15", "10", "20", "8"],
      correta: 0
    },
    {
      pergunta: "Qual o resultado de 12 ÷ 4?",
      respostas: ["2", "3", "4", "6"],
      correta: 1
    }
  ],

  portugues: [
    {
      pergunta: "Qual é o plural de 'pão'?",
      respostas: ["pães", "pãos", "pãezinhos", "pãons"],
      correta: 0
    },
    {
      pergunta: "Qual dessas palavras é um advérbio?",
      respostas: ["rápido", "correndo", "devagar", "andar"],
      correta: 2
    },
    {
      pergunta: "Qual a função do sujeito na oração?",
      respostas: [
        "Indicar a ação",
        "Ser o objeto",
        "Quem pratica a ação",
        "Ser o predicado"
      ],
      correta: 2
    }
  ],

  historia: [
    {
      pergunta: "Quem descobriu o Brasil?",
      respostas: [
        "Pedro Álvares Cabral",
        "Cristóvão Colombo",
        "Vasco da Gama",
        "Dom Pedro I"
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
      respostas: ["1889", "1822", "1500", "1945"],
      correta: 0
    }
  ],

  geografia: [
    {
      pergunta: "Qual é o maior continente?",
      respostas: ["África", "Europa", "Ásia", "América do Sul"],
      correta: 2
    },
    {
      pergunta: "Qual é o rio mais extenso do mundo?",
      respostas: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
      correta: 1
    }
  ],

  ciencias: [
    {
      pergunta: "Qual o principal componente do ar que respiramos?",
      respostas: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"],
      correta: 1
    },
    {
      pergunta: "Qual órgão do corpo humano produz insulina?",
      respostas: ["Fígado", "Pâncreas", "Rins", "Estômago"],
      correta: 1
    }
  ],

  ingles: [
    {
      pergunta: "Qual a tradução de 'apple'?",
      respostas: ["Laranja", "Pera", "Maçã", "Banana"],
      correta: 2
    },
    {
      pergunta: "Como se diz 'bom dia' em inglês?",
      respostas: ["Good night", "Good morning", "Good afternoon", "Hello"],
      correta: 1
    }
  ],

  artes: [
    {
      pergunta: "Quem pintou a Mona Lisa?",
      respostas: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"],
      correta: 1
    },
    {
      pergunta: "Qual estilo de arte é caracterizado por formas geométricas e cores vivas?",
      respostas: ["Cubismo", "Impressionismo", "Expressionismo", "Realismo"],
      correta: 0
    }
  ]
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
} else {
  titulo.innerText = `Tema: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
  carregarPergunta();
}

function carregarPergunta() {
  const q = perguntas[indice];
  pergunta.innerText = q.pergunta;
  respostas.innerHTML = "";
  q.respostas.forEach((resp, i) => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.innerText = resp;
    btn.onclick = () => selecionar(i);
    respostas.appendChild(btn);
  });
  btnProxima.style.display = "none";
  score.innerText = "";
}

function selecionar(i) {
  const q = perguntas[indice];
  if (i === q.correta) pontos++;
  indice++;
  btnProxima.style.display = "inline-block";
  bloquearRespostas();
}

function bloquearRespostas() {
  const todasRespostas = document.querySelectorAll("#answers .answer");
  todasRespostas.forEach((btn) => {
    btn.style.pointerEvents = "none";
  });
}

function nextQuestion() {
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  pergunta.innerText = "Quiz finalizado!";
  respostas.innerHTML = "";
  score.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
  btnProxima.style.display = "none";
  btnVoltar.style.display = "inline-block";
  btnProximoQuiz.style.display = "inline-block";
}

function proximoQuiz() {
  const temas = Object.keys(quizzes);
  let atual = temas.indexOf(tema);
  let proximo = (atual + 1) % temas.length;
  window.location.href = `quiz.html?tema=${temas[proximo]}`;
}
