// script.js

const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

const subjectTitles = {
  ciencias: 'Ciências',
  ingles: 'Inglês',
  artes: 'Artes',
  fisica: 'Física',
  matematica: 'Matemática',
  historia: 'História',
  geografia: 'Geografia',
  literatura: 'Literatura',
};

const questions = {
  ciencias: [
    {
      question: "Qual é o principal gás responsável pelo efeito estufa?",
      answers: [
        { text: "Oxigênio", correct: false },
        { text: "Dióxido de carbono", correct: true },
        { text: "Nitrogênio", correct: false },
        { text: "Hélio", correct: false },
      ],
    },
    {
      question: "Qual é a unidade básica da vida?",
      answers: [
        { text: "Átomo", correct: false },
        { text: "Molécula", correct: false },
        { text: "Célula", correct: true },
        { text: "Organelos", correct: false },
      ],
    },
    {
      question: "Qual destes planetas é conhecido como o Planeta Vermelho?",
      answers: [
        { text: "Marte", correct: true },
        { text: "Júpiter", correct: false },
        { text: "Saturno", correct: false },
        { text: "Vênus", correct: false },
      ],
    },
    {
      question: "O que é fotossíntese?",
      answers: [
        { text: "Processo de respiração das plantas", correct: false },
        { text: "Processo de absorção de água", correct: false },
        { text: "Processo pelo qual plantas produzem seu alimento usando luz solar", correct: true },
        { text: "Processo de reprodução das plantas", correct: false },
      ],
    },
    {
      question: "Qual é a camada mais externa da Terra?",
      answers: [
        { text: "Manto", correct: false },
        { text: "Núcleo", correct: false },
        { text: "Crosta", correct: true },
        { text: "Litosfera", correct: false },
      ],
    },
    {
      question: "Qual o nome do processo pelo qual o ser humano elimina resíduos do corpo?",
      answers: [
        { text: "Digestão", correct: false },
        { text: "Excreção", correct: true },
        { text: "Circulação", correct: false },
        { text: "Respiração", correct: false },
      ],
    },
    {
      question: "Qual a função dos glóbulos vermelhos no sangue?",
      answers: [
        { text: "Transportar oxigênio", correct: true },
        { text: "Combater infecções", correct: false },
        { text: "Coagular sangue", correct: false },
        { text: "Produzir anticorpos", correct: false },
      ],
    },
  ],
  ingles: [
    {
      question: "What is the past tense of 'go'?",
      answers: [
        { text: "goed", correct: false },
        { text: "went", correct: true },
        { text: "gone", correct: false },
        { text: "goes", correct: false },
      ],
    },
    {
      question: "Which word is a synonym of 'happy'?",
      answers: [
        { text: "Sad", correct: false },
        { text: "Joyful", correct: true },
        { text: "Angry", correct: false },
        { text: "Tired", correct: false },
      ],
    },
    {
      question: "How do you say 'cachorro' in English?",
      answers: [
        { text: "Dog", correct: true },
        { text: "Cat", correct: false },
        { text: "Bird", correct: false },
        { text: "Fish", correct: false },
      ],
    },
    {
      question: "Complete: I ___ to school every day.",
      answers: [
        { text: "go", correct: true },
        { text: "went", correct: false },
        { text: "gone", correct: false },
        { text: "going", correct: false },
      ],
    },
    {
      question: "What does 'big' mean?",
      answers: [
        { text: "Grande", correct: true },
        { text: "Pequeno", correct: false },
        { text: "Rápido", correct: false },
        { text: "Lento", correct: false },
      ],
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        { text: "She don't like ice cream.", correct: false },
        { text: "She doesn't like ice cream.", correct: true },
        { text: "She not like ice cream.", correct: false },
        { text: "She no like ice cream.", correct: false },
      ],
    },
    {
      question: "What is the plural form of 'child'?",
      answers: [
        { text: "Childs", correct: false },
        { text: "Children", correct: true },
        { text: "Childes", correct: false },
        { text: "Child", correct: false },
      ],
    },
  ],
  artes: [
    {
      question: "Qual movimento artístico é caracterizado pelo uso da luz e sombra para criar volume?",
      answers: [
        { text: "Cubismo", correct: false },
        { text: "Barroco", correct: true },
        { text: "Impressionismo", correct: false },
        { text: "Surrealismo", correct: false },
      ],
    },
    {
      question: "Quem pintou a Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      question: "Qual é a técnica de pintura que utiliza pequenas manchas de cor?",
      answers: [
        { text: "Pontilhismo", correct: true },
        { text: "Fresco", correct: false },
        { text: "Grafite", correct: false },
        { text: "Aquarela", correct: false },
      ],
    },
    {
      question: "Em que período histórico o movimento Impressionista surgiu?",
      answers: [
        { text: "Século XIX", correct: true },
        { text: "Século XVIII", correct: false },
        { text: "Século XVII", correct: false },
        { text: "Século XX", correct: false },
      ],
    },
    {
      question: "O que é arte abstrata?",
      answers: [
        { text: "Arte que representa objetos reais com precisão", correct: false },
        { text: "Arte que não representa objetos reais", correct: true },
        { text: "Arte feita com tinta aquarela", correct: false },
        { text: "Arte feita com colagem", correct: false },
      ],
    },
    {
      question: "Quem é considerado o pai da arte moderna?",
      answers: [
        { text: "Pablo Picasso", correct: true },
        { text: "Salvador Dalí", correct: false },
        { text: "Claude Monet", correct: false },
        { text: "Andy Warhol", correct: false },
      ],
    },
    {
      question: "Qual técnica artística usa areia para criar textura?",
      answers: [
        { text: "Areografia", correct: true },
        { text: "Frescor", correct: false },
        { text: "Gravura", correct: false },
        { text: "Litografia", correct: false },
      ],
    },
  ],
  fisica: [
    {
      question: "Qual é a unidade de medida da força no Sistema Internacional?",
      answers: [
        { text: "Newton", correct: true },
        { text: "Pascal", correct: false },
        { text: "Joule", correct: false },
        { text: "Watt", correct: false },
      ],
    },
    {
      question: "O que diz a primeira lei de Newton?",
      answers: [
        { text: "A força é igual à massa vezes a aceleração", correct: false },
        { text: "Um corpo em repouso tende a permanecer em repouso", correct: true },
        { text: "Para cada ação existe uma reação igual e contrária", correct: false },
        { text: "Energia não pode ser criada nem destruída", correct: false },
      ],
    },
    {
      question: "Qual a velocidade da luz no vácuo?",
      answers: [
        { text: "300.000 km/s", correct: true },
        { text: "150.000 km/s", correct: false },
        { text: "3.000 km/s", correct: false },
        { text: "30.000 km/s", correct: false },
      ],
    },
    {
      question: "O que é energia cinética?",
      answers: [
        { text: "Energia armazenada", correct: false },
        { text: "Energia do movimento", correct: true },
        { text: "Energia térmica", correct: false },
        { text: "Energia potencial", correct: false },
      ],
    },
    {
      question: "Qual é o símbolo da aceleração?",
      answers: [
        { text: "a", correct: true },
        { text: "v", correct: false },
        { text: "F", correct: false },
        { text: "m", correct: false },
      ],
    },
    {
      question: "O que acontece com a pressão quando o volume de um gás diminui, segundo a lei de Boyle?",
      answers: [
        { text: "A pressão aumenta", correct: true },
        { text: "A pressão diminui", correct: false },
        { text: "A pressão fica constante", correct: false },
        { text: "A pressão não depende do volume", correct: false },
      ],
    },
    {
      question: "O que é um condutor elétrico?",
      answers: [
        { text: "Material que não permite passagem de corrente elétrica", correct: false },
        { text: "Material que permite passagem de corrente elétrica", correct: true },
        { text: "Material isolante", correct: false },
        { text: "Material radioativo", correct: false },
      ],
    },
  ],
  matematica: [
    {
      question: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
      answers: [
        { text: "3,14", correct: true },
        { text: "3,15", correct: false },
        { text: "3,12", correct: false },
        { text: "3,00", correct: false },
      ],
    },
    {
      question: "Qual é a fórmula da área do círculo?",
      answers: [
        { text: "π x raio²", correct: true },
        { text: "2π x raio", correct: false },
        { text: "π x diâmetro", correct: false },
        { text: "raio x altura", correct: false },
      ],
    },
    {
      question: "Quanto é 7 x 8?",
      answers: [
        { text: "56", correct: true },
        { text: "54", correct: false },
        { text: "58", correct: false },
        { text: "48", correct: false },
      ],
    },
    {
      question: "Qual é a raiz quadrada de 81?",
      answers: [
        { text: "9", correct: true },
        { text: "8", correct: false },
        { text: "7", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "O que é um número primo?",
      answers: [
        { text: "Número divisível por 1 e por ele mesmo somente", correct: true },
        { text: "Número par", correct: false },
        { text: "Número ímpar", correct: false },
        { text: "Número divisível por vários números", correct: false },
      ],
    },
    {
      question: "Qual o resultado de 15% de 200?",
      answers: [
        { text: "30", correct: true },
        { text: "25", correct: false },
        { text: "35", correct: false },
        { text: "40", correct: false },
      ],
    },
    {
      question: "Qual é a solução da equação: 2x + 4 = 12?",
      answers: [
        { text: "x = 4", correct: true },
        { text: "x = 2", correct: false },
        { text: "x = 6", correct: false },
        { text: "x = 8", correct: false },
      ],
    },
  ],
  historia: [
    {
      question: "Em que ano ocorreu a Proclamação da República no Brasil?",
      answers: [
        { text: "1889", correct: true },
        { text: "1822", correct: false },
        { text: "1500", correct: false },
        { text: "1930", correct: false },
      ],
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      answers: [
        { text: "Deodoro da Fonseca", correct: true },
        { text: "Getúlio Vargas", correct: false },
        { text: "Juscelino Kubitschek", correct: false },
        { text: "Dom Pedro II", correct: false },
      ],
    },
    {
      question: "Qual foi a principal causa da Revolução Francesa?",
      answers: [
        { text: "Desigualdade social e econômica", correct: true },
        { text: "Guerra contra a Inglaterra", correct: false },
        { text: "Descobrimento da América", correct: false },
        { text: "Reforma Protestante", correct: false },
      ],
    },
    {
      question: "Quem descobriu o Brasil?",
      answers: [
        { text: "Pedro Álvares Cabral", correct: true },
        { text: "Cristóvão Colombo", correct: false },
        { text: "Vasco da Gama", correct: false },
        { text: "Fernão de Magalhães", correct: false },
      ],
    },
    {
      question: "Em que século aconteceu a Idade Média?",
      answers: [
        { text: "Entre os séculos V e XV", correct: true },
        { text: "Entre os séculos XV e XVIII", correct: false },
        { text: "Século XIX", correct: false },
        { text: "Século XX", correct: false },
      ],
    },
    {
      question: "Qual país foi o berço da Revolução Industrial?",
      answers: [
        { text: "Inglaterra", correct: true },
        { text: "França", correct: false },
        { text: "Alemanha", correct: false },
        { text: "Estados Unidos", correct: false },
      ],
    },
    {
      question: "Qual o nome do tratado que dividiu as terras do Novo Mundo entre Portugal e Espanha?",
      answers: [
        { text: "Tratado de Tordesilhas", correct: true },
        { text: "Tratado de Versalhes", correct: false },
        { text: "Tratado de Utrecht", correct: false },
        { text: "Tratado de Paris", correct: false },
      ],
    },
  ],
  geografia: [
    {
      question: "Qual é o maior continente em área?",
      answers: [
        { text: "Ásia", correct: true },
        { text: "África", correct: false },
        { text: "América", correct: false },
        { text: "Europa", correct: false },
      ],
    },
    {
      question: "Qual é o rio mais longo do mundo?",
      answers: [
        { text: "Nilo", correct: true },
        { text: "Amazonas", correct: false },
        { text: "Mississippi", correct: false },
        { text: "Yangtzé", correct: false },
      ],
    },
    {
      question: "Qual país tem a maior população do mundo?",
      answers: [
        { text: "China", correct: true },
        { text: "Índia", correct: false },
        { text: "Estados Unidos", correct: false },
        { text: "Rússia", correct: false },
      ],
    },
    {
      question: "Qual é a capital do Brasil?",
      answers: [
        { text: "Brasília", correct: true },
        { text: "Rio de Janeiro", correct: false },
        { text: "São Paulo", correct: false },
        { text: "Salvador", correct: false },
      ],
    },
    {
      question: "O que é uma bacia hidrográfica?",
      answers: [
        { text: "Área de terra que drena água para um rio principal", correct: true },
        { text: "Uma grande floresta", correct: false },
        { text: "Um tipo de montanha", correct: false },
        { text: "Um deserto", correct: false },
      ],
    },
    {
      question: "Qual é o maior deserto do mundo?",
      answers: [
        { text: "Deserto do Saara", correct: true },
        { text: "Deserto de Gobi", correct: false },
        { text: "Deserto da Antártida", correct: false },
        { text: "Deserto de Kalahari", correct: false },
      ],
    },
    {
      question: "Qual fenômeno é responsável pela circulação dos ventos e das correntes marítimas?",
      answers: [
        { text: "A rotação da Terra", correct: true },
        { text: "A gravidade", correct: false },
        { text: "A luz solar direta", correct: false },
        { text: "A umidade do ar", correct: false },
      ],
    },
  ],
  literatura: [
    {
      question: "Quem escreveu 'Dom Casmurro'?",
      answers: [
        { text: "Machado de Assis", correct: true },
        { text: "José de Alencar", correct: false },
        { text: "Carlos Drummond de Andrade", correct: false },
        { text: "Clarice Lispector", correct: false },
      ],
    },
    {
      question: "Qual é o gênero literário de 'Romeu e Julieta'?",
      answers: [
        { text: "Tragédia", correct: true },
        { text: "Comédia", correct: false },
        { text: "Drama", correct: false },
        { text: "Poema", correct: false },
      ],
    },
    {
      question: "Quem é o autor de 'O Pequeno Príncipe'?",
      answers: [
        { text: "Antoine de Saint-Exupéry", correct: true },
        { text: "Victor Hugo", correct: false },
        { text: "Jules Verne", correct: false },
        { text: "William Shakespeare", correct: false },
      ],
    },
    {
      question: "Qual movimento literário é conhecido pelo sentimentalismo e valorização da natureza?",
      answers: [
        { text: "Romantismo", correct: true },
        { text: "Realismo", correct: false },
        { text: "Modernismo", correct: false },
        { text: "Simbolismo", correct: false },
      ],
    },
    {
      question: "Quem escreveu 'Os Lusíadas'?",
      answers: [
        { text: "Luís de Camões", correct: true },
        { text: "Fernando Pessoa", correct: false },
        { text: "José Saramago", correct: false },
        { text: "Eça de Queirós", correct: false },
      ],
    },
    {
      question: "O que é uma metáfora?",
      answers: [
        { text: "Comparação direta sem usar 'como'", correct: true },
        { text: "Comparação usando 'como'", correct: false },
        { text: "Exagero intencional", correct: false },
        { text: "Repetição de sons", correct: false },
      ],
    },
    {
      question: "Quem é o personagem principal de 'Memórias Póstumas de Brás Cubas'?",
      answers: [
        { text: "Brás Cubas", correct: true },
        { text: "Bentinho", correct: false },
        { text: "Capitu", correct: false },
        { text: "Bentinho", correct: false },
      ],
    },
  ],
};

// Tempo por matéria em segundos (exemplo: 120s = 2 minutos)
const timePerSubject = 120;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const subjectTitleEl = document.getElementById('subject-title');
const timerEl = document.getElementById('time');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let timerInterval;
let timeLeft;

if (!subject || !questions[subject]) {
  alert('Matéria inválida! Retornando para a tela inicial.');
  window.location.href = 'index.html';
} else {
  subjectTitleEl.textContent = `Quiz de ${subjectTitles[subject]}`;
  shuffledQuestions = questions[subject].slice(); // copia array
  totalQuestionsEl.textContent = shuffledQuestions.length;
  startTimer(timePerSubject);
  showQuestion();
}

function startTimer(duration) {
  timeLeft = duration;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('O tempo acabou! O quiz será reiniciado.');
      restartQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerEl.textContent = `${minutes}:${seconds}`;
}

function showQuestion() {
  resetState();
  const questionObj = shuffledQuestions[currentQuestionIndex];
  questionEl.textContent = questionObj.question;
  questionObj.answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent = answer.text;
    button.dataset.correct = answer.correct;
    button.addEventListener('click', selectAnswer);
    answersEl.appendChild(button);
  });
  currentQuestionEl.textContent = currentQuestionIndex + 1;
}

function resetState() {
  clearStatusClass(document.body);
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  setStatusClass(selectedButton, correct);

  // Bloquear todas as respostas
  Array.from(answersEl.children).forEach(button => {
    button.disabled = true;
    const isCorrect = button.dataset.correct === 'true';
    setStatusClass(button, isCorrect);
  });

  // Avançar pergunta após delay para mostrar cor
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion();
    } else {
      alert('Quiz finalizado! O quiz será reiniciado.');
      restartQuiz();
    }
  }, 1500);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function restartQuiz() {
  currentQuestionIndex = 0;
  startTimer(timePerSubject);
  showQuestion();
}
