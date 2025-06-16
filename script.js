const quizzes = {
  matematica: [
    { pergunta: "Qual o valor de √256?", respostas: ["12", "14", "16", "18"], correta: 2 },
    { pergunta: "Qual é o resultado de 15 x 12?", respostas: ["170", "180", "190", "200"], correta: 1 },
    { pergunta: "Se f(x) = 2x + 3, qual o valor de f(5)?", respostas: ["13", "10", "15", "8"], correta: 0 },
    { pergunta: "Qual o próximo número da sequência: 2, 6, 12, 20, ?", respostas: ["28", "30", "32", "36"], correta: 0 },
    { pergunta: "Quanto é 7! (7 fatorial)?", respostas: ["5040", "720", "362880", "120"], correta: 0 },
    { pergunta: "Qual é a fórmula para a área do círculo?", respostas: ["πr", "2πr", "πr²", "2r²"], correta: 2 },
    { pergunta: "Qual o valor da soma dos ângulos internos de um hexágono?", respostas: ["720°", "540°", "360°", "900°"], correta: 0 }
  ],

  portugues: [
    { pergunta: "Qual é a figura de linguagem em 'O tempo é um rio que corre'?", respostas: ["Metáfora", "Metonímia", "Hipérbole", "Antítese"], correta: 0 },
    { pergunta: "O que é um sujeito oculto?", respostas: ["Sujeito implícito", "Sujeito inexistente", "Sujeito composto", "Sujeito simples"], correta: 0 },
    { pergunta: "Qual a função do adjunto adverbial?", respostas: ["Modificar o verbo", "Modificar o sujeito", "Modificar o objeto", "Modificar o adjetivo"], correta: 0 },
    { pergunta: "Qual é a forma correta do verbo no futuro do pretérito?", respostas: ["Falaria", "Falará", "Falou", "Falando"], correta: 0 },
    { pergunta: "Qual o plural de 'mal' no sentido de dificuldade?", respostas: ["Males", "Mals", "Malses", "Malles"], correta: 0 },
    { pergunta: "Qual a diferença entre 'por que' e 'porque'?", respostas: [
      "Por que: causa; Porque: pergunta",
      "Por que: pergunta; Porque: causa",
      "Por que: negação; Porque: afirmação",
      "Por que: dúvida; Porque: explicação"
    ], correta: 1 },
    { pergunta: "O que é um verbo transitivo indireto?", respostas: [
      "Verbo que exige complemento com preposição",
      "Verbo que não exige complemento",
      "Verbo que exige complemento direto",
      "Verbo que é intransitivo"
    ], correta: 0 }
  ],

  historia: [
    { pergunta: "Qual tratado marcou o fim da Primeira Guerra Mundial?", respostas: ["Tratado de Versalhes", "Tratado de Paris", "Tratado de Tordesilhas", "Tratado de Utrecht"], correta: 0 },
    { pergunta: "Quem foi o líder da Revolução Russa de 1917?", respostas: ["Lenin", "Stalin", "Trotsky", "Kerensky"], correta: 0 },
    { pergunta: "Qual civilização antiga construiu Machu Picchu?", respostas: ["Incas", "Maias", "Astecas", "Egípcios"], correta: 0 },
    { pergunta: "Qual evento marcou o início da Idade Moderna?", respostas: ["Descobrimentos", "Queda de Constantinopla", "Revolução Industrial", "Renascimento"], correta: 1 },
    { pergunta: "Quem foi o presidente do Brasil durante a ditadura militar?", respostas: ["Emílio Médici", "Juscelino Kubitschek", "Getúlio Vargas", "Tancredo Neves"], correta: 0 },
    { pergunta: "Quando foi abolida a escravidão no Brasil?", respostas: ["1888", "1822", "1910", "1870"], correta: 0 },
    { pergunta: "Qual país foi responsável pela colonização da Austrália?", respostas: ["Reino Unido", "Espanha", "Portugal", "França"], correta: 0 }
  ],

  geografia: [
    { pergunta: "Qual é a capital da Austrália?", respostas: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correta: 2 },
    { pergunta: "Qual é o maior bioma brasileiro?", respostas: ["Amazônia", "Cerrado", "Caatinga", "Pantanal"], correta: 0 },
    { pergunta: "Qual é a montanha mais alta do mundo?", respostas: ["K2", "Everest", "Kangchenjunga", "Lhotse"], correta: 1 },
    { pergunta: "Qual país tem o maior número de vulcões ativos?", respostas: ["Indonésia", "Japão", "Estados Unidos", "Itália"], correta: 0 },
    { pergunta: "Qual o principal rio da África?", respostas: ["Nilo", "Congo", "Zambeze", "Níger"], correta: 0 },
    { pergunta: "Qual é o fuso horário padrão para o meridiano de Greenwich?", respostas: ["GMT", "UTC+1", "PST", "EST"], correta: 0 },
    { pergunta: "Qual é o clima predominante na região do Saara?", respostas: ["Desértico", "Tropical", "Temperado", "Polar"], correta: 0 }
  ],

  ciencias: [
    { pergunta: "Qual elemento químico tem símbolo 'Fe'?", respostas: ["Ferro", "Flúor", "Fósforo", "Frâncio"], correta: 0 },
    { pergunta: "Qual é o processo de divisão celular que resulta em duas células idênticas?", respostas: ["Mitose", "Meiose", "Fissão", "Fusão"], correta: 0 },
    { pergunta: "Qual a função dos ribossomos na célula?", respostas: ["Produzir proteínas", "Armazenar energia", "Controlar a célula", "Transportar oxigênio"], correta: 0 },
    { pergunta: "Qual gás é mais abundante na atmosfera terrestre?", respostas: ["Nitrogênio", "Oxigênio", "Dióxido de carbono", "Argônio"], correta: 0 },
    { pergunta: "Qual é a unidade básica da hereditariedade?", respostas: ["Gene", "Cromossomo", "DNA", "RNA"], correta: 0 },
    { pergunta: "Qual é a função dos anticorpos?", respostas: ["Combater infecções", "Produzir energia", "Armazenar informações", "Regular temperatura"], correta: 0 },
    { pergunta: "Qual a camada da Terra onde ocorrem os terremotos?", respostas: ["Crosta", "Manto", "Núcleo", "Litosfera"], correta: 0 }
  ],

  ingles: [
    { pergunta: "Qual o significado de 'serendipity'?", respostas: ["Sorte inesperada", "Tristeza", "Alegria", "Medo"], correta: 0 },
    { pergunta: "Qual é o passado do verbo 'to go'?", respostas: ["Went", "Go", "Gone", "Going"], correta: 0 },
    { pergunta: "O que significa a expressão 'break the ice'?", respostas: [
      "Quebrar o gelo (iniciar uma conversa)",
      "Ficar com frio",
      "Terminar algo",
      "Fazer algo perigoso"
    ], correta: 0 },
    { pergunta: "Qual a tradução de 'Although'?", respostas: ["Embora", "Porque", "Enquanto", "Então"], correta: 0 },
    { pergunta: "Qual a forma correta de perguntar no presente simples?", respostas: [
      "Do you like it?",
      "You like it?",
      "Are you liking it?",
      "Likes you it?"
    ], correta: 0 },
    { pergunta: "Como se forma o plural da palavra 'mouse'?", respostas: ["Mice", "Mouses", "Mouse", "Meese"], correta: 0 },
    { pergunta: "Qual é o antônimo de 'scarce'?", respostas: ["Abundant", "Rare", "Little", "Small"], correta: 0 }
  ],

  artes: [
    { pergunta: "Quem foi o pintor do movimento surrealista?", respostas: ["Salvador Dalí", "Pablo Picasso", "Van Gogh", "Claude Monet"], correta: 0 },
    { pergunta: "O que caracteriza o estilo Barroco?", respostas: ["Dramaticidade e ornamentos", "Simplicidade e cores claras", "Formas geométricas", "Expressão emocional"], correta: 0 },
    { pergunta: "Quem é conhecido como o 'Pai da Pintura Moderna'?", respostas: ["Paul Cézanne", "Leonardo da Vinci", "Michelangelo", "Raphael"], correta: 0 },
    { pergunta: "Qual técnica utiliza pintura com pontos?", respostas: ["Pontilhismo", "Frescor", "Gravura", "Grafite"], correta: 0 },
    { pergunta: "Qual artista é famoso por esculturas em mármore?", respostas: ["Michelangelo", "Rodin", "Donatello", "Bernini"], correta: 0 },
    { pergunta: "Qual o movimento artístico associado a Andy Warhol?", respostas: ["Pop Art", "Impressionismo", "Cubismo", "Expressionismo"], correta: 0 },
    { pergunta: "Qual elemento é fundamental no design gráfico?", respostas: ["Composição", "Narrativa", "Música", "Dança"], correta: 0 }
  ],

  fisica: [
    { pergunta: "O que diz a primeira lei de Newton?", respostas: [
      "Um corpo em repouso permanece em repouso",
      "A energia é sempre conservada",
      "Força é massa vezes aceleração",
      "A velocidade da luz é constante"
    ], correta: 0 },
    { pergunta: "Qual é a unidade de medida da força?", respostas: ["Newton", "Joule", "Watt", "Pascal"], correta: 0 },
    { pergunta: "O que é impulso?", respostas: ["Força vezes tempo", "Energia acumulada", "Velocidade inicial", "Massa vezes velocidade"], correta: 0 },
    { pergunta: "Qual é a constante gravitacional universal?", respostas: [
      "6,674×10⁻¹¹ N·m²/kg²",
      "9,8 m/s²",
      "3×10⁸ m/s",
      "1,6×10⁻¹⁹ C"
    ], correta: 0 },
    { pergunta: "O que ocorre com a energia cinética de um objeto quando sua velocidade dobra?", respostas: [
      "Ela quadruplica",
      "Ela dobra",
      "Ela triplica",
      "Ela não muda"
    ], correta: 0 },
    { pergunta: "Qual é o princípio da conservação da energia?", respostas: [
      "Energia não se cria nem se destrói",
      "Energia é criada do nada",
      "Energia desaparece com o tempo",
      "Energia pode ser destruída"
    ], correta: 0 },
    { pergunta: "Qual fenômeno explica a refração da luz?", respostas: [
      "Mudança de velocidade da luz ao passar por meios diferentes",
      "Reflexão da luz",
      "Absorção da luz",
      "Dispersão da luz"
    ], correta: 0 }
  ]
};

let tema = new URLSearchParams(window.location.search).get("tema");
let perguntas = quizzes[tema];
let indice = 0;
let pontos = 0;
let timerInterval;
const TEMPO_POR_QUIZ = 90; // segundos para completar o quiz

const titulo = document.getElementById("quiz-title");
const pergunta = document.getElementById("question");
const respostas = document.getElementById("answers");
const score = document.getElementById("score");
const btnProxima = document.getElementById("next-btn");
const btnVoltar = document.getElementById("back-btn");
const btnProximoQuiz = document.getElementById("next-quiz-btn");
const timerDisplay = document.getElementById("timer");

if (!perguntas) {
  titulo.innerText = "Tema não encontrado.";
  btnProxima.style.display = "none";
} else {
  titulo.innerText = `Tema: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
  iniciarTimer();
  carregarPergunta();
}

function iniciarTimer() {
  let tempoRestante = TEMPO_POR_QUIZ;
  atualizarTimer(tempoRestante);

  timerInterval = setInterval(() => {
    tempoRestante--;
    if (tempoRestante < 0) {
      clearInterval(timerInterval);
      alert("O tempo acabou! Você será redirecionado para a página inicial.");
      window.location.href = "index.html";
      return;
    }
    atualizarTimer(tempoRestante);
  }, 1000);
}

function atualizarTimer(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segs = segundos % 60;
  timerDisplay.innerText = `Tempo: ${String(minutos).padStart(2, "0")}:${String(segs).padStart(2, "0")}`;
}

function carregarPergunta() {
  if (indice >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  const atual = perguntas[indice];
  pergunta.innerText = atual.pergunta;
  respostas.innerHTML = "";

  atual.respostas.forEach((resp, i) => {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.innerText = resp;
    div.onclick = () => selecionarResposta(i);
    respostas.appendChild(div);
  });

  btnProxima.style.display = "none";
  score.innerText = `Pergunta ${indice + 1} de ${perguntas.length}`;
}

function selecionarResposta(i) {
  const atual = perguntas[indice];
  const todosRespostas = document.querySelectorAll(".answer");

  todosRespostas.forEach((respDiv, idx) => {
    respDiv.onclick = null;
    if (idx === atual.correta) {
      respDiv.style.backgroundColor = "#00e676"; // verde
    }
    if (idx === i && idx !== atual.correta) {
      respDiv.style.backgroundColor = "#e53935"; // vermelho
    }
  });

  if (i === atual.correta) {
    pontos++;
  }

  btnProxima.style.display = "inline-block";
}

function nextQuestion() {
  indice++;
  carregarPergunta();
}

function finalizarQuiz() {
  clearInterval(timerInterval);
  pergunta.innerText = "Quiz finalizado!";
  respostas.innerHTML = "";
  btnProxima.style.display = "none";
  score.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;

  btnVoltar.style.display = "inline-block";
  btnProximoQuiz.style.display = "inline-block";
}

function proximoQuiz() {
  const temas = Object.keys(quizzes);
  let idxAtual = temas.indexOf(tema);
  let proximoIdx = (idxAtual + 1) % temas.length;
  window.location.href = `quiz.html?tema=${temas[proximoIdx]}`;
}
