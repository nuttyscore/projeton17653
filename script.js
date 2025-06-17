const quizzes = [
  {
    name: 'Ciências',
    time: 60,
    questions: [
      {
        question: "Qual a principal função das mitocôndrias nas células?",
        answers: [
          { text: "Produzir energia", correct: true },
          { text: "Controlar o núcleo", correct: false },
          { text: "Produzir proteínas", correct: false },
          { text: "Armazenar água", correct: false }
        ]
      },
      // ... mais perguntas Ciências, no mínimo 7, igual antes
      {
        question: "O que é fotossíntese?",
        answers: [
          { text: "Processo de produção de energia nas plantas", correct: true },
          { text: "Respiração dos animais", correct: false },
          { text: "Divisão celular", correct: false },
          { text: "Transformação de proteína em energia", correct: false }
        ]
      },
      {
        question: "Qual o elemento químico essencial para a formação da água?",
        answers: [
          { text: "Hidrogênio e Oxigênio", correct: true },
          { text: "Carbono e Nitrogênio", correct: false },
          { text: "Oxigênio e Nitrogênio", correct: false },
          { text: "Hidrogênio e Carbono", correct: false }
        ]
      },
      {
        question: "Qual a unidade básica da vida?",
        answers: [
          { text: "Célula", correct: true },
          { text: "Tecido", correct: false },
          { text: "Órgão", correct: false },
          { text: "Sistema", correct: false }
        ]
      },
      {
        question: "O que são vírus?",
        answers: [
          { text: "Agentes infecciosos não celulares", correct: true },
          { text: "Células do sistema imunológico", correct: false },
          { text: "Bactérias", correct: false },
          { text: "Protozoários", correct: false }
        ]
      },
      {
        question: "Qual o pH neutro da água?",
        answers: [
          { text: "7", correct: true },
          { text: "0", correct: false },
          { text: "14", correct: false },
          { text: "10", correct: false }
        ]
      },
      {
        question: "Qual gás é essencial para a respiração dos seres humanos?",
        answers: [
          { text: "Oxigênio", correct: true },
          { text: "Dióxido de carbono", correct: false },
          { text: "Nitrogênio", correct: false },
          { text: "Hélio", correct: false }
        ]
      }
    ]
  },
  {
    name: 'Inglês',
    time: 60,
    questions: [
      // mesmas perguntas do inglês, 7 ou mais perguntas difíceis
      {
        question: "What is the past tense of 'go'?",
        answers: [
          { text: "Went", correct: true },
          { text: "Goed", correct: false },
          { text: "Going", correct: false },
          { text: "Gone", correct: false }
        ]
      },
      {
        question: "How do you say 'cachorro' in English?",
        answers: [
          { text: "Dog", correct: true },
          { text: "Cat", correct: false },
          { text: "Horse", correct: false },
          { text: "Bird", correct: false }
        ]
      },
      {
        question: "What does 'to eat' mean?",
        answers: [
          { text: "Comer", correct: true },
          { text: "Beber", correct: false },
          { text: "Correr", correct: false },
          { text: "Dormir", correct: false }
        ]
      },
      {
        question: "How do you say 'bom dia' in English?",
        answers: [
          { text: "Good morning", correct: true },
          { text: "Good night", correct: false },
          { text: "Hello", correct: false },
          { text: "Good afternoon", correct: false }
        ]
      },
      {
        question: "What is the opposite of 'big'?",
        answers: [
          { text: "Small", correct: true },
          { text: "Tall", correct: false },
          { text: "Long", correct: false },
          { text: "Heavy", correct: false }
        ]
      },
      {
        question: "Complete: She ___ to school every day.",
        answers: [
          { text: "goes", correct: true },
          { text: "go", correct: false },
          { text: "going", correct: false },
          { text: "gone", correct: false }
        ]
      },
      {
        question: "What is the plural of 'mouse'?",
        answers: [
          { text: "Mice", correct: true },
          { text: "Mouses", correct: false },
          { text: "Mouse", correct: false },
          { text: "Meese", correct: false }
        ]
      }
    ]
  },
  {
    name: 'Artes',
    time: 60,
    questions: [
      // mesmas perguntas Artes (7+)
      {
        question: "Quem pintou a Mona Lisa?",
        answers: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Michelangelo", correct: false },
          { text: "Raphael", correct: false },
          { text: "Van Gogh", correct: false }
        ]
      },
      {
        question: "Qual movimento artístico é conhecido pelo uso de cores fortes e formas geométricas?",
        answers: [
          { text: "Cubismo", correct: true },
          { text: "Impressionismo", correct: false },
          { text: "Barroco", correct: false },
          { text: "Renascimento", correct: false }
        ]
      },
      {
        question: "O que é escultura?",
        answers: [
          { text: "Arte tridimensional feita com materiais como pedra ou madeira", correct: true },
          { text: "Pintura em tela", correct: false },
          { text: "Desenho em papel", correct: false },
          { text: "Fotografia artística", correct: false }
        ]
      },
      {
        question: "Qual artista é conhecido por suas obras surrealistas?",
        answers: [
          { text: "Salvador Dalí", correct: true },
          { text: "Pablo Picasso", correct: false },
          { text: "Claude Monet", correct: false },
          { text: "Frida Kahlo", correct: false }
        ]
      },
      {
        question: "O que é arte abstrata?",
        answers: [
          { text: "Arte que não tenta representar a realidade", correct: true },
          { text: "Arte que copia fotos", correct: false },
          { text: "Arte tradicional", correct: false },
          { text: "Arte clássica", correct: false }
        ]
      },
      {
        question: "Qual técnica usa tinta diluída em água?",
        answers: [
          { text: "Aquarela", correct: true },
          { text: "Óleo", correct: false },
          { text: "Têmpera", correct: false },
          { text: "Fresco", correct: false }
        ]
      },
      {
        question: "Quem criou a obra 'O Grito'?",
        answers: [
          { text: "Edvard Munch", correct: true },
          { text: "Vincent van Gogh", correct: false },
          { text: "Henri Matisse", correct: false },
          { text: "Paul Cézanne", correct: false }
        ]
      }
    ]
  },
  {
    name: 'Física',
    time: 60,
    questions: [
      // perguntas física 7+
      {
        question: "O que é velocidade?",
        answers: [
          { text: "Mudança de posição por unidade de tempo", correct: true },
          { text: "Quantidade de massa", correct: false },
          { text: "Força aplicada", correct: false },
          { text: "Energia potencial", correct: false }
        ]
      },
      {
        question: "Qual a unidade de medida da força no SI?",
        answers: [
          { text: "Newton", correct: true },
          { text: "Joule", correct: false },
          { text: "Watt", correct: false },
          { text: "Pascal", correct: false }
        ]
      },
      {
        question: "O que diz a primeira lei de Newton?",
        answers: [
          { text: "Um objeto em repouso permanece em repouso até que uma força atue sobre ele", correct: true },
          { text: "Energia não pode ser criada nem destruída", correct: false },
          { text: "Aceleração é proporcional à força", correct: false },
          { text: "Força é massa vezes aceleração", correct: false }
        ]
      },
      {
        question: "Qual é a fórmula da velocidade média?",
        answers: [
          { text: "v = Δs/Δt", correct: true },
          { text: "F = m.a", correct: false },
          { text: "E = mc²", correct: false },
          { text: "P = F.t", correct: false }
        ]
      },
      {
        question: "O que é energia cinética?",
        answers: [
          { text: "Energia do movimento", correct: true },
          { text: "Energia armazenada", correct: false },
          { text: "Energia térmica", correct: false },
          { text: "Energia química", correct: false }
        ]
      },
      {
        question: "Qual é a unidade de medida da pressão?",
        answers: [
          { text: "Pascal", correct: true },
          { text: "Newton", correct: false },
          { text: "Joule", correct: false },
          { text: "Watt", correct: false }
        ]
      },
      {
        question: "O que é trabalho em Física?",
        answers: [
          { text: "Força aplicada ao longo de uma distância", correct: true },
          { text: "Quantidade de energia", correct: false },
          { text: "Velocidade vezes massa", correct: false },
          { text: "Pressão vezes área", correct: false }
        ]
      }
    ]
  }
];

let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let timer;
let timeRemaining;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const timerEl = document.getElementById('timer');
const controlsEl = document.getElementById('controls');
const btnRestart = document.getElementById('btnRestart');
const btnNextQuiz = document.getElementById('btnNextQuiz');

btnRestart.addEventListener('click', () => {
  window.location.href = 'index.html';
});

btnNextQuiz.addEventListener('click', () => {
  currentQuizIndex++;
  if (currentQuizIndex >= quizzes.length) currentQuizIndex = 0;
  currentQuestionIndex = 0;
  controlsEl.style.display = 'none';
  startQuiz();
});

function startQuiz() {
  currentQuestionIndex = 0;
  timeRemaining = quizzes[currentQuizIndex].time;
  showTimer();
  showQuestion();
  startTimer();
}

function showQuestion() {
  const quiz = quizzes[currentQuizIndex];
  const question = quiz.questions[currentQuestionIndex];
  questionEl.textContent = question.question;

  answersEl.innerHTML = '';
  question.answers.forEach(answer => {
    const btn = document.createElement('div');
    btn.classList.add('answer');
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.correct));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(correct) {
  // opcional: pontuação, animação etc.
  currentQuestionIndex++;
  if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerEl.textContent = `Tempo restante: ${timeRemaining}s`;
  timer = setInterval(() => {
    timeRemaining--;
    timerEl.textContent = `Tempo restante: ${timeRemaining}s`;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function showTimer() {
  timerEl.textContent = `Tempo restante: ${timeRemaining}s`;
}

function endQuiz() {
  clearInterval(timer);
  questionEl.textContent = 'Quiz finalizado!';
  answersEl.innerHTML = '';
  timerEl.textContent = '';
  controlsEl.style.display = 'block';
}

// Quando carregar, começa o quiz direto
window.onload = () => {
  startQuiz();
};
