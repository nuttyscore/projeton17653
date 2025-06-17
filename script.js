const perguntaElement = document.getElementById('pergunta');
const respostasElement = document.getElementById('respostas');
const nextBtn = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const botoesFinal = document.getElementById('botoes-final');

let perguntas = [];
let perguntaIndex = 0;
let score = 0;
let timerInterval;
const TEMPO_POR_MATERIA = 60; // segundos
let tempoRestante = TEMPO_POR_MATERIA;

let materiaAtual = localStorage.getItem('materiaQuiz') || 'ciencias';

// Perguntas difíceis para cada matéria (mais de 6 cada)
const bancoPerguntas = {
  ciencias: [
    {
      pergunta: "Qual o principal gás responsável pelo efeito estufa?",
      respostas: [
        { texto: "Oxigênio", correta: false },
        { texto: "Dióxido de Carbono", correta: true },
        { texto: "Nitrogênio", correta: false },
        { texto: "Hélio", correta: false },
      ],
    },
    {
      pergunta: "Qual é a unidade básica da vida?",
      respostas: [
        { texto: "Átomo", correta: false },
        { texto: "Molécula", correta: false },
        { texto: "Célula", correta: true },
        { texto: "Organelas", correta: false },
      ],
    },
    {
      pergunta: "Qual é o processo pelo qual as plantas produzem seu alimento?",
      respostas: [
        { texto: "Respiração", correta: false },
        { texto: "Fotossíntese", correta: true },
        { texto: "Transpiração", correta: false },
        { texto: "Fermentação", correta: false },
      ],
    },
    {
      pergunta: "O que é a biodiversidade?",
      respostas: [
        { texto: "Variedade de espécies em um ecossistema", correta: true },
        { texto: "Número de árvores em uma floresta", correta: false },
        { texto: "Quantidade de água no solo", correta: false },
        { texto: "Quantidade de ar na atmosfera", correta: false },
      ],
    },
    {
      pergunta: "Qual órgão do corpo humano é responsável pela filtração do sangue?",
      respostas: [
        { texto: "Fígado", correta: false },
        { texto: "Rim", correta: true },
        { texto: "Coração", correta: false },
        { texto: "Pulmão", correta: false },
      ],
    },
    {
      pergunta: "Qual é a função da hemoglobina no sangue?",
      respostas: [
        { texto: "Transportar oxigênio", correta: true },
        { texto: "Produzir células", correta: false },
        { texto: "Controlar a pressão", correta: false },
        { texto: "Eliminar toxinas", correta: false },
      ],
    },
    {
      pergunta: "O que é o DNA?",
      respostas: [
        { texto: "Um tipo de proteína", correta: false },
        { texto: "Material genético", correta: true },
        { texto: "Uma célula", correta: false },
        { texto: "Um carboidrato", correta: false },
      ],
    },
  ],

  ingles: [
    {
      pergunta: "What is the past tense of 'go'?",
      respostas: [
        { texto: "Goed", correta: false },
        { texto: "Went", correta: true },
        { texto: "Gone", correta: false },
        { texto: "Going", correta: false },
      ],
    },
    {
      pergunta: "Which word is a synonym of 'happy'?",
      respostas: [
        { texto: "Sad", correta: false },
        { texto: "Joyful", correta: true },
        { texto: "Angry", correta: false },
        { texto: "Tired", correta: false },
      ],
    },
    {
      pergunta: "Choose the correct sentence:",
      respostas: [
        { texto: "She don't like apples.", correta: false },
        { texto: "She doesn't like apples.", correta: true },
        { texto: "She isn't likes apples.", correta: false },
        { texto: "She aren't like apples.", correta: false },
      ],
    },
    {
      pergunta: "What is the opposite of 'always'?",
      respostas: [
        { texto: "Never", correta: true },
        { texto: "Sometimes", correta: false },
        { texto: "Usually", correta: false },
        { texto: "Often", correta: false },
      ],
    },
    {
      pergunta: "Complete: I ___ to the store yesterday.",
      respostas: [
        { texto: "go", correta: false },
        { texto: "went", correta: true },
        { texto: "gone", correta: false },
        { texto: "going", correta: false },
      ],
    },
    {
      pergunta: "Which is a question?",
      respostas: [
        { texto: "He is tall.", correta: false },
        { texto: "Is he tall?", correta: true },
        { texto: "He tall is?", correta: false },
        { texto: "Tall he is?", correta: false },
      ],
    },
    {
      pergunta: "Choose the correct spelling:",
      respostas: [
        { texto: "Accomodate", correta: false },
        { texto: "Accommodate", correta: true },
        { texto: "Acommodate", correta: false },
        { texto: "Acomodate", correta: false },
      ],
    },
  ],

  artes: [
    {
      pergunta: "Quem pintou a Mona Lisa?",
      respostas: [
        { texto: "Pablo Picasso", correta: false },
        { texto: "Leonardo da Vinci", correta: true },
        { texto: "Vincent van Gogh", correta: false },
        { texto: "Michelangelo", correta: false },
      ],
    },
    {
      pergunta: "O que é o Cubismo?",
      respostas: [
        { texto: "Um estilo musical", correta: false },
        { texto: "Um movimento artístico", correta: true },
        { texto: "Um tipo de dança", correta: false },
        { texto: "Uma técnica de escultura", correta: false },
      ],
    },
    {
      pergunta: "Qual dessas obras é de Vincent van Gogh?",
      respostas: [
        { texto: "Guernica", correta: false },
        { texto: "A Noite Estrelada", correta: true },
        { texto: "O Grito", correta: false },
        { texto: "David", correta: false },
      ],
    },
    {
      pergunta: "O que representa o Surrealismo?",
      respostas: [
        { texto: "Realismo extremo", correta: false },
        { texto: "Representação do inconsciente", correta: true },
        { texto: "Arte abstrata", correta: false },
        { texto: "Arte digital", correta: false },
      ],
    },
    {
      pergunta: "Quem foi Frida Kahlo?",
      respostas: [
        { texto: "Uma pintora mexicana", correta: true },
        { texto: "Uma escultora italiana", correta: false },
        { texto: "Uma bailarina russa", correta: false },
        { texto: "Uma cantora brasileira", correta: false },
      ],
    },
    {
      pergunta: "Qual é o principal material usado na escultura clássica?",
      respostas: [
        { texto: "Madeira", correta: false },
        { texto: "Mármore", correta: true },
        { texto: "Metal", correta: false },
        { texto: "Vidro", correta: false },
      ],
    },
    {
      pergunta: "Qual técnica artística utiliza tinta diluída em água?",
      respostas: [
        { texto: "Óleo", correta: false },
        { texto: "Aquarela", correta: true },
        { texto: "Pastel", correta: false },
        { texto: "Guache", correta: false },
      ],
    },
  ],

  fisica: [
    {
      pergunta: "Qual é a fórmula da velocidade média?",
      respostas: [
        { texto: "v = d/t", correta: true },
        { texto: "v = t/d", correta: false },
        { texto: "v = d*t", correta: false },
        { texto: "v = d + t", correta: false },
      ],
    },
    {
      pergunta: "O que é aceleração?",
      respostas: [
        { texto: "Variação da velocidade no tempo", correta: true },
        { texto: "Velocidade constante", correta: false },
        { texto: "Distância percorrida", correta: false },
        { texto: "Força aplicada", correta: false },
      ],
    },
    {
      pergunta: "Qual é a unidade de força no SI?",
      respostas: [
        { texto: "Newton", correta: true },
        { texto: "Joule", correta: false },
        { texto: "Watt", correta: false },
        { texto: "Pascal", correta: false },
      ],
    },
    {
      pergunta: "O que diz a primeira lei de Newton?",
      respostas: [
        { texto: "Corpo em repouso permanece em repouso", correta: true },
        { texto: "Ação e reação são iguais e opostas", correta: false },
        { texto: "Força é massa vezes aceleração", correta: false },
        { texto: "Energia não se cria nem se destrói", correta: false },
      ],
    },
    {
      pergunta: "O que é energia cinética?",
      respostas: [
        { texto: "Energia do movimento", correta: true },
        { texto: "Energia armazenada", correta: false },
        { texto: "Energia térmica", correta: false },
        { texto: "Energia potencial", correta: false },
      ],
    },
    {
      pergunta: "Qual é a unidade de energia no SI?",
      respostas: [
        { texto: "Joule", correta: true },
        { texto: "Newton", correta: false },
        { texto: "Watt", correta: false },
        { texto: "Pascal", correta: false },
      ],
    },
    {
      pergunta: "O que é a pressão?",
      respostas: [
        { texto: "Força por unidade de área", correta: true },
        { texto: "Energia por unidade de volume", correta: false },
        { texto: "Massa por volume", correta: false },
        { texto: "Velocidade por tempo", correta: false },
      ],
    },
  ],

  matematica: [
    {
      pergunta: "Qual o valor de π (pi) arredondado para duas casas decimais?",
      respostas: [
        { texto: "3,14", correta: true },
        { texto: "3,41", correta: false },
        { texto: "2,14", correta: false },
        { texto: "3,04", correta: false },
      ],
    },
    {
      pergunta: "Qual a fórmula da área do círculo?",
      respostas: [
        { texto: "π × raio²", correta: true },
        { texto: "2 × π × raio", correta: false },
        { texto: "π × diâmetro", correta: false },
        { texto: "raio × altura", correta: false },
      ],
    },
    {
      pergunta: "Quanto é 7 × 8?",
      respostas: [
        { texto: "54", correta: false },
        { texto: "56", correta: true },
        { texto: "48", correta: false },
        { texto: "64", correta: false },
      ],
    },
    {
      pergunta: "O que é um número primo?",
      respostas: [
        { texto: "Número divisível por 1 e por ele mesmo", correta: true },
        { texto: "Número par", correta: false },
        { texto: "Número negativo", correta: false },
        { texto: "Número decimal", correta: false },
      ],
    },
    {
      pergunta: "Qual é a fórmula da soma dos ângulos internos de um triângulo?",
      respostas: [
        { texto: "180 graus", correta: true },
        { texto: "360 graus", correta: false },
        { texto: "90 graus", correta: false },
        { texto: "270 graus", correta: false },
      ],
    },
    {
      pergunta: "Quanto é 12 dividido por 3?",
      respostas: [
        { texto: "3", correta: false },
        { texto: "4", correta: true },
        { texto: "5", correta: false },
        { texto: "6", correta: false },
      ],
    },
    {
      pergunta: "Qual o resultado de 5²?",
      respostas: [
        { texto: "10", correta: false },
        { texto: "25", correta: true },
        { texto: "20", correta: false },
        { texto: "15", correta: false },
      ],
    },
  ],

  historia: [
    {
      pergunta: "Quem foi o primeiro imperador do Brasil?",
      respostas: [
        { texto: "Dom Pedro I", correta: true },
        { texto: "Dom João VI", correta: false },
        { texto: "Getúlio Vargas", correta: false },
        { texto: "Juscelino Kubitschek", correta: false },
      ],
    },
    {
      pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
      respostas: [
        { texto: "1889", correta: true },
        { texto: "1822", correta: false },
        { texto: "1500", correta: false },
        { texto: "1930", correta: false },
      ],
    },
    {
      pergunta: "Quem foi o líder da Revolução Francesa?",
      respostas: [
        { texto: "Maximilien Robespierre", correta: true },
        { texto: "Napoleão Bonaparte", correta: false },
        { texto: "Luís XVI", correta: false },
        { texto: "Joana d’Arc", correta: false },
      ],
    },
    {
      pergunta: "Qual evento marcou o fim da Idade Média?",
      respostas: [
        { texto: "Descobrimento da América", correta: true },
        { texto: "Revolução Industrial", correta: false },
        { texto: "Queda do Império Romano", correta: false },
        { texto: "Revolução Francesa", correta: false },
      ],
    },
    {
      pergunta: "Quem foi o responsável pela unificação da Alemanha?",
      respostas: [
        { texto: "Otto von Bismarck", correta: true },
        { texto: "Adolf Hitler", correta: false },
        { texto: "Friedrich Nietzsche", correta: false },
        { texto: "Karl Marx", correta: false },
      ],
    },
    {
      pergunta: "O que foi o Tratado de Tordesilhas?",
      respostas: [
        { texto: "Divisão das terras entre Portugal e Espanha", correta: true },
        { texto: "Um acordo comercial", correta: false },
        { texto: "Uma guerra", correta: false },
        { texto: "Uma revolução", correta: false },
      ],
    },
    {
      pergunta: "Quem foi o último faraó do Egito?",
      respostas: [
        { texto: "Cleópatra", correta: true },
        { texto: "Tutancâmon", correta: false },
        { texto: "Ramsés II", correta: false },
        { texto: "Nefertiti", correta: false },
      ],
    },
  ],

  geografia: [
    {
      pergunta: "Qual é o maior país do mundo em extensão territorial?",
      respostas: [
        { texto: "Rússia", correta: true },
        { texto: "Canadá", correta: false },
        { texto: "China", correta: false },
        { texto: "Estados Unidos", correta: false },
      ],
    },
    {
      pergunta: "Qual é o maior oceano da Terra?",
      respostas: [
        { texto: "Oceano Pacífico", correta: true },
        { texto: "Oceano Atlântico", correta: false },
        { texto: "Oceano Índico", correta: false },
        { texto: "Oceano Ártico", correta: false },
      ],
    },
    {
      pergunta: "Qual continente é conhecido como 'o continente branco'?",
      respostas: [
        { texto: "Antártida", correta: true },
        { texto: "África", correta: false },
        { texto: "Europa", correta: false },
        { texto: "Ásia", correta: false },
      ],
    },
    {
      pergunta: "Qual é o rio mais longo do mundo?",
      respostas: [
        { texto: "Nilo", correta: true },
        { texto: "Amazonas", correta: false },
        { texto: "Yangtzé", correta: false },
        { texto: "Mississippi", correta: false },
      ],
    },
    {
      pergunta: "Qual país tem o maior número de habitantes?",
      respostas: [
        { texto: "China", correta: true },
        { texto: "Índia", correta: false },
        { texto: "Estados Unidos", correta: false },
        { texto: "Brasil", correta: false },
      ],
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: [
        { texto: "Brasília", correta: true },
        { texto: "Rio de Janeiro", correta: false },
        { texto: "São Paulo", correta: false },
        { texto: "Salvador", correta: false },
      ],
    },
    {
      pergunta: "O que é um arquipélago?",
      respostas: [
        { texto: "Conjunto de ilhas", correta: true },
        { texto: "Montanha isolada", correta: false },
        { texto: "Grande rio", correta: false },
        { texto: "Deserto", correta: false },
      ],
    },
  ],

  portugues: [
    {
      pergunta: "Qual é a função do sujeito na oração?",
      respostas: [
        { texto: "Praticar a ação", correta: true },
        { texto: "Receber a ação", correta: false },
        { texto: "Indicar tempo", correta: false },
        { texto: "Expressar sentimento", correta: false },
      ],
    },
    {
      pergunta: "Qual a forma correta de plural de 'cidadão'?",
      respostas: [
        { texto: "Cidadãos", correta: true },
        { texto: "Cidadães", correta: false },
        { texto: "Cidadãoses", correta: false },
        { texto: "Cidadões", correta: false },
      ],
    },
    {
      pergunta: "Qual a classe gramatical da palavra 'rapidamente'?",
      respostas: [
        { texto: "Advérbio", correta: true },
        { texto: "Adjetivo", correta: false },
        { texto: "Verbo", correta: false },
        { texto: "Substantivo", correta: false },
      ],
    },
    {
      pergunta: "Qual é o tempo verbal da frase: 'Eu cantarei amanhã'?",
      respostas: [
        { texto: "Futuro do presente", correta: true },
        { texto: "Presente", correta: false },
        { texto: "Pretérito perfeito", correta: false },
        { texto: "Pretérito imperfeito", correta: false },
      ],
    },
    {
      pergunta: "Qual a função da vírgula na frase?",
      respostas: [
        { texto: "Separar elementos", correta: true },
        { texto: "Indicar pergunta", correta: false },
        { texto: "Indicar exclamação", correta: false },
        { texto: "Substituir ponto", correta: false },
      ],
    },
    {
      pergunta: "Qual a forma correta: 'Ele viu o filme' ou 'Ele viu o filme.'?",
      respostas: [
        { texto: "Ele viu o filme.", correta: true },
        { texto: "Ele viu o filme", correta: false },
        { texto: "Ambas estão erradas", correta: false },
        { texto: "Ambas estão corretas", correta: false },
      ],
    },
    {
      pergunta: "Qual a função do verbo na frase?",
      respostas: [
        { texto: "Indicar ação ou estado", correta: true },
        { texto: "Indicar sujeito", correta: false },
        { texto: "Indicar objeto", correta: false },
        { texto: "Indicar complemento", correta: false },
      ],
    },
  ],
};

// Inicia o quiz
function iniciarQuiz() {
  perguntas = bancoPerguntas[materiaAtual];
  perguntaIndex = 0;
  score = 0;
  tempoRestante = TEMPO_POR_MATERIA;
  scoreElement.innerText = "";
  botoesFinal.style.display = "none";
  nextBtn.disabled = true;
  mostrarPergunta();
  iniciarTimer();
}

function mostrarPergunta() {
  limparRespostas();
  nextBtn.disabled = true;

  const perguntaAtual = perguntas[perguntaIndex];
  perguntaElement.innerText = perguntaAtual.pergunta;

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement('button');
    botao.innerText = resposta.texto;
    botao.classList.add('resposta-btn');
    botao.addEventListener('click', () => selecionarResposta(botao, resposta.correta));
    respostasElement.appendChild(botao);
  });

  atualizarTimerVisual();
}

function limparRespostas() {
  while (respostasElement.firstChild) {
    respostasElement.removeChild(respostasElement.firstChild);
  }
}

function selecionarResposta(botao, correta) {
  if (correta) {
    botao.classList.add('correct');
    score++;
  } else {
    botao.classList.add('wrong');
  }

  // Desativa todos os botões
  const botoes = respostasElement.querySelectorAll('button');
  botoes.forEach(btn => {
    btn.disabled = true;
    // Marca as respostas corretas
    const idx = Array.from(botoes).indexOf(btn);
    if (perguntas[perguntaIndex].respostas[idx].correta) {
      btn.classList.add('correct');
    }
  });

  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  perguntaIndex++;
  if (perguntaIndex < perguntas.length) {
    mostrarPergunta();
  } else {
    finalizarQuiz();
  }
});

function finalizarQuiz() {
  clearInterval(timerInterval);
  perguntaElement.innerText = `Você acertou ${score} de ${perguntas.length} perguntas!`;
  limparRespostas();
  scoreElement.innerText = "";
  timerElement.innerText = "";

  nextBtn.style.display = "none";
  botoesFinal.style.display = "block";
}

document.getElementById('btn-voltar').addEventListener('click', () => {
  window.location.href = 'index.html';
});

document.getElementById('btn-proximo').addEventListener('click', () => {
  window.location.reload(); // reinicia o quiz da mesma matéria
});

// Timer
function iniciarTimer() {
  clearInterval(timerInterval);
  tempoRestante = TEMPO_POR_MATERIA;
  timerElement.innerText = `Tempo restante: ${tempoRestante}s`;
  timerInterval = setInterval(() => {
    tempoRestante--;
    atualizarTimerVisual();
    if (tempoRestante <= 0) {
      clearInterval(timerInterval);
      reiniciarQuiz();
    }
  }, 1000);
}

function atualizarTimerVisual() {
  timerElement.innerText = `Tempo restante: ${tempoRestante}s`;
}

function reiniciarQuiz() {
  alert('Tempo esgotado! O quiz será reiniciado.');
  perguntaIndex = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  botoesFinal.style.display = "none";
  iniciarQuiz();
}

window.onload = iniciarQuiz;
