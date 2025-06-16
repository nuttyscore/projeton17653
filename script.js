
const quizzes = {
  matematica: [
    { pergunta: "Quanto é 2 + 2?", respostas: ["3", "4", "5", "6"], correta: 1 },
    { pergunta: "Quanto é 5 x 3?", respostas: ["15", "10", "20", "8"], correta: 0 },
    { pergunta: "Qual o resultado de 12 ÷ 4?", respostas: ["2", "3", "4", "6"], correta: 1 },
    { pergunta: "Qual a raiz quadrada de 81?", respostas: ["7", "8", "9", "10"], correta: 2 },
    { pergunta: "Quanto é 10²?", respostas: ["100", "20", "10", "200"], correta: 0 },
    { pergunta: "Qual é o valor de π (pi) aproximado?", respostas: ["3.14", "2.71", "1.62", "1.41"], correta: 0 }
  ],

  portugues: [
    { pergunta: "Qual é o plural de 'pão'?", respostas: ["pães", "pãos", "pãezinhos", "pãons"], correta: 0 },
    { pergunta: "Qual dessas palavras é um advérbio?", respostas: ["rápido", "correndo", "devagar", "andar"], correta: 2 },
    { pergunta: "Qual a função do sujeito na oração?", respostas: ["Indicar a ação", "Ser o objeto", "Quem pratica a ação", "Ser o predicado"], correta: 2 },
    { pergunta: "Qual a classe gramatical da palavra 'felizmente'?", respostas: ["Substantivo", "Advérbio", "Adjetivo", "Verbo"], correta: 1 },
    { pergunta: "O que é uma oração subordinada?", respostas: ["Uma oração independente", "Uma oração que depende de outra", "Um tipo de verbo", "Uma palavra"], correta: 1 },
    { pergunta: "Qual é o tempo verbal da frase 'Eu cantarei amanhã'?", respostas: ["Presente", "Pretérito", "Futuro", "Imperativo"], correta: 2 }
  ],

  historia: [
    { pergunta: "Quem descobriu o Brasil?", respostas: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Dom Pedro I"], correta: 0 },
    { pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?", respostas: ["1889", "1822", "1500", "1945"], correta: 0 },
    { pergunta: "Qual guerra foi conhecida como a 'Guerra dos Cem Anos'?", respostas: ["Guerra entre França e Inglaterra", "Guerra civil no Brasil", "Guerra das Malvinas", "Guerra do Paraguai"], correta: 0 },
    { pergunta: "Quem foi o primeiro imperador do Brasil?", respostas: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"], correta: 0 },
    { pergunta: "Em que período ocorreu a Idade Média?", respostas: ["476 a 1453", "1492 a 1789", "1789 a 1914", "1914 a 1945"], correta: 0 },
    { pergunta: "Qual civilização construiu as pirâmides no Egito?", respostas: ["Fenícios", "Romanos", "Egípcios", "Maias"], correta: 2 }
  ],

  geografia: [
    { pergunta: "Qual é o maior continente?", respostas: ["África", "Europa", "Ásia", "América do Sul"], correta: 2 },
    { pergunta: "Qual é o rio mais extenso do mundo?", respostas: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"], correta: 1 },
    { pergunta: "Qual país tem a maior população do mundo?", respostas: ["Índia", "Estados Unidos", "China", "Brasil"], correta: 2 },
    { pergunta: "Qual é a capital do Canadá?", respostas: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correta: 2 },
    { pergunta: "Qual oceano é o maior em extensão?", respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"], correta: 2 },
    { pergunta: "Qual é o deserto mais seco do mundo?", respostas: ["Sahara", "Atacama", "Gobi", "Kalahari"], correta: 1 }
  ],

  ciencias: [
    { pergunta: "Qual o principal componente do ar que respiramos?", respostas: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"], correta: 1 },
    { pergunta: "Qual órgão do corpo humano produz insulina?", respostas: ["Fígado", "Pâncreas", "Rins", "Estômago"], correta: 1 },
    { pergunta: "Qual é a unidade básica da vida?", respostas: ["Átomo", "Molécula", "Célula", "Tecido"], correta: 2 },
    { pergunta: "Qual o processo pelo qual as plantas produzem alimento?", respostas: ["Fotossíntese", "Respiração", "Fermentação", "Digestão"], correta: 0 },
    { pergunta: "Qual é o gás liberado pelas células durante a respiração?", respostas: ["Oxigênio", "Dióxido de carbono", "Nitrogênio", "Hélio"], correta: 1 },
    { pergunta: "Qual sistema do corpo humano é responsável pelo transporte de oxigênio?", respostas: ["Digestório", "Circulatório", "Nervoso", "Excretor"], correta: 1 }
  ],

  ingles: [
    { pergunta: "Qual a tradução de 'apple'?", respostas: ["Laranja", "Pera", "Maçã", "Banana"], correta: 2 },
    { pergunta: "Como se diz 'bom dia' em inglês?", respostas: ["Good night", "Good morning", "Good afternoon", "Hello"], correta: 1 },
    { pergunta: "O que significa 'I am hungry'?", respostas: ["Estou feliz", "Estou com fome", "Estou cansado", "Estou com frio"], correta: 1 },
    { pergunta: "Como se diz 'livro' em inglês?", respostas: ["Pen", "Book", "Table", "Chair"], correta: 1 },
    { pergunta: "Qual a forma correta do verbo 'to be' para 'they'?", respostas: ["Is", "Are", "Am", "Be"], correta: 1 },
    { pergunta: "O que significa 'thank you'?", respostas: ["Por favor", "Desculpa", "Obrigado", "Olá"], correta: 2 }
  ],

  artes: [
    { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"], correta: 1 },
    { pergunta: "Qual estilo de arte é caracterizado por formas geométricas e cores vivas?", respostas: ["Cubismo", "Impressionismo", "Expressionismo", "Realismo"], correta: 0 },
    { pergunta: "Quem é o autor da obra 'O Grito'?", respostas: ["Edvard Munch", "Claude Monet", "Salvador Dalí", "Frida Kahlo"], correta: 0 },
    { pergunta: "Qual movimento artístico ficou conhecido pelo uso de luz e sombra?", respostas: ["Barroco", "Romantismo", "Renascimento", "Futurismo"], correta: 0 },
    { pergunta: "Qual técnica artística usa tinta aplicada com pequenos pontos?", respostas: ["Pontilhismo", "Frescor", "Grafite", "Mosaico"], correta: 0 },
    { pergunta: "Qual artista é famoso pelos quadros com girassóis?", respostas: ["Van Gogh", "Picasso", "Rembrandt", "Da Vinci"], correta: 0 }
  ],

  fisica: [
    { pergunta: "Qual é a fórmula da velocidade média?", respostas: ["v = d/t", "v = m/a", "v = t/d", "v = a/m"], correta: 0 },
    { pergunta: "Quem formulou a lei da gravitação universal?", respostas: ["Galileu Galilei", "Isaac Newton", "Albert Einstein", "Nikola Tesla"], correta: 1 },
    { pergunta: "O que representa a unidade Newton (N)?", respostas: ["Força", "Energia", "Potência", "Trabalho"], correta: 0 },
    { pergunta: "Qual é a velocidade da luz no vácuo?", respostas: ["300.000 km/s", "150.000 km/s", "30.000 km/s", "3.000 km/s"], correta: 0 },
    { pergunta: "Qual é o princípio da conservação da energia?", respostas: [
      "Energia pode ser criada do nada",
      "Energia não se cria nem se destrói",
      "Energia desaparece ao longo do tempo",
      "Energia aumenta sempre"
    ], correta: 1 },
    { pergunta: "O que é um corpo em queda livre?", respostas: [
      "Um corpo que se move em linha reta",
      "Um corpo que cai apenas pela ação da gravidade",
      "Um corpo que está parado",
      "Um corpo que usa propulsão"
    ], correta: 1 }
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
