const temas = {
  matematica: {
    titulo: "📐 Quiz de Matemática",
    proximo: "portugues",
    perguntas: [
      {
        pergunta: "Quanto é 12 x 8?",
        respostas: ["96", "84", "88", "102"],
        correta: 0
      },
      {
        pergunta: "Raiz quadrada de 144?",
        respostas: ["10", "11", "12", "13"],
        correta: 2
      }
    ]
  },
  portugues: {
    titulo: "📝 Quiz de Português",
    proximo: "historia",
    perguntas: [
      {
        pergunta: "Qual é o sujeito da frase: 'O menino correu para casa'?",
        respostas: ["correu", "o menino", "para casa", "menino correu"],
        correta: 1
      },
      {
        pergunta: "Plural de 'irmão'?",
        respostas: ["irmãos", "irmões", "irmães", "irmãoses"],
        correta: 0
      }
    ]
  },
  historia: {
    titulo: "🏛 Quiz de História",
    proximo: "geografia",
    perguntas: [
      {
        pergunta: "Quem proclamou a independência do Brasil?",
        respostas: ["Dom João VI", "Tiradentes", "Dom Pedro I", "Getúlio Vargas"],
        correta: 2
      },
      {
        pergunta: "Qual país iniciou a 2ª Guerra Mundial?",
        respostas: ["França", "Japão", "Alemanha", "Rússia"],
        correta: 2
      }
    ]
  },
  geografia: {
    titulo: "🌍 Quiz de Geografia",
    proximo: "ciencias",
    perguntas: [
      {
        pergunta: "Maior país da América do Sul?",
        respostas: ["Brasil", "Argentina", "Colômbia", "Chile"],
        correta: 0
      },
      {
        pergunta: "Qual é o oceano entre América e Europa?",
        respostas: ["Índico", "Pacífico", "Ártico", "Atlântico"],
        correta: 3
      }
    ]
  },
  ciencias: {
    titulo: "🔬 Quiz de Ciências",
    proximo: "ingles",
    perguntas: [
      {
        pergunta: "Qual parte do corpo humano bombeia sangue?",
        respostas: ["Cérebro", "Estômago", "Fígado", "Coração"],
        correta: 3
      },
      {
        pergunta: "A água ferve a quantos graus Celsius?",
        respostas: ["80", "90", "100", "110"],
        correta: 2
      }
    ]
  },
  ingles: {
    titulo: "🗣️ Quiz de Inglês",
    proximo: "artes",
    perguntas: [
      {
        pergunta: "O que significa 'hello'?",
        respostas: ["Adeus", "Oi", "Por favor", "Obrigado"],
        correta: 1
      },
      {
        pergunta: "Tradução de 'apple'?",
        respostas: ["Banana", "Uva", "Maçã", "Pêra"],
        correta: 2
      }
    ]
  },
  artes: {
    titulo: "🎨 Quiz de Artes",
    proximo: null,
    perguntas: [
      {
        pergunta: "Quem pintou a Mona Lisa?",
        respostas: ["Van Gogh", "Michelangelo", "Leonardo da Vinci", "Picasso"],
        correta: 2
      },
      {
        pergunta: "A arte do grafite é geralmente feita onde?",
        respostas: ["Em telas", "Em muros", "Em livros", "Em jornais"],
        correta: 1
      }
    ]
  }
};

let temaAtual;
let perguntas;
let index = 0;
let pontos = 0;

function getTema() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tema");
}

function iniciarQuiz() {
  const tema = getTema();
  if (!temas[tema]) return;

  temaAtual = temas[tema];
  perguntas = temaAtual.perguntas;
  document.getElementById("quiz-title").textContent = temaAtual.titulo;
  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntas[index];
  document.getElementById("question").textContent = q.pergunta;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.respostas.forEach((resp, i) => {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.textContent = resp;
    div.onclick = () => verificarResposta(i);
    answersDiv.appendChild(div);
  });
  document.getElementById("next-btn").style.display = "none";
}

function verificarResposta(i) {
  const correta = perguntas[index].correta;
  const respostas = document.querySelectorAll(".answer");
  respostas.forEach((el, idx) => {
    el.style.backgroundColor = idx === correta ? "#2ecc71" : "#e74c3c";
    el.onclick = null;
  });
  if (i === correta) pontos++;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  index++;
  if (index < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz-container").innerHTML = `<h2>Você finalizou o quiz!</h2>`;
    document.getElementById("score").textContent = `Acertos: ${pontos}/${perguntas.length}`;
    document.getElementById("back-btn").style.display = "inline-block";
    if (temaAtual.proximo) {
      document.getElementById("next-quiz-btn").style.display = "inline-block";
    }
  }
}

function proximoQuiz() {
  if (temaAtual.proximo) {
    window.location.href = `quiz.html?tema=${temaAtual.proximo}`;
  }
}

window.onload = iniciarQuiz;
