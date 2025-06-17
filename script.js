const materias = {
  ciencias: [
    {
      pergunta: "Qual é o principal gás responsável pelo efeito estufa?",
      respostas: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hélio"],
      correta: 2,
    },
    {
      pergunta: "Qual órgão do corpo humano é responsável pela circulação do sangue?",
      respostas: ["Fígado", "Coração", "Pulmão", "Rim"],
      correta: 1,
    },
    {
      pergunta: "Qual destes é um mamífero?",
      respostas: ["Crocodilo", "Golfinho", "Pombo", "Tubarão"],
      correta: 1,
    },
    {
      pergunta: "Qual o processo pelo qual as plantas produzem seu alimento?",
      respostas: [
        "Respiração",
        "Fotossíntese",
        "Digestão",
        "Fermentação",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o estado físico da água a 0°C e 1 atm?",
      respostas: ["Sólido", "Líquido", "Gasoso", "Plasma"],
      correta: 0,
    },
    {
      pergunta: "Qual é a unidade básica da vida?",
      respostas: ["Célula", "Molécula", "Átomo", "Orgânulo"],
      correta: 0,
    },
    {
      pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
      respostas: ["Terra", "Marte", "Júpiter", "Saturno"],
      correta: 1,
    },
  ],
  ingles: [
    {
      pergunta: "What is the past tense of 'go'?",
      respostas: ["Goed", "Went", "Gone", "Go"],
      correta: 1,
    },
    {
      pergunta: "How do you say 'casa' in English?",
      respostas: ["House", "Car", "Home", "Tree"],
      correta: 0,
    },
    {
      pergunta: "Select the correct sentence:",
      respostas: [
        "She don't like apples.",
        "She doesn't like apples.",
        "She isn't likes apples.",
        "She no like apples.",
      ],
      correta: 1,
    },
    {
      pergunta: "What does 'happy' mean?",
      respostas: ["Triste", "Feliz", "Cansado", "Nervoso"],
      correta: 1,
    },
    {
      pergunta: "How do you spell the number 7?",
      respostas: ["Seven", "Sevan", "Sevin", "Saven"],
      correta: 0,
    },
    {
      pergunta: "What is the opposite of 'big'?",
      respostas: ["Small", "Tall", "Long", "Short"],
      correta: 0,
    },
    {
      pergunta: "Choose the correct word: 'I ___ a book.'",
      respostas: ["has", "have", "had", "haves"],
      correta: 1,
    },
  ],
  artes: [
    {
      pergunta: "Qual pintor é conhecido por suas obras cubistas?",
      respostas: ["Picasso", "Da Vinci", "Van Gogh", "Monet"],
      correta: 0,
    },
    {
      pergunta: "Qual técnica utiliza pequenas manchas de cor para formar a imagem?",
      respostas: ["Cubismo", "Impressionismo", "Pontilhismo", "Surrealismo"],
      correta: 2,
    },
    {
      pergunta: "O que significa 'perspectiva' na arte?",
      respostas: [
        "Forma de desenho que representa profundidade",
        "Estilo de pintura com cores fortes",
        "Técnica de escultura em madeira",
        "Movimento artístico moderno",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual desses artistas é famoso pelo quadro 'Noite Estrelada'?",
      respostas: ["Van Gogh", "Picasso", "Rembrandt", "Michelangelo"],
      correta: 0,
    },
    {
      pergunta: "Qual movimento artístico surgiu no século XX e busca expressar o inconsciente?",
      respostas: ["Cubismo", "Expressionismo", "Surrealismo", "Realismo"],
      correta: 2,
    },
    {
      pergunta: "Qual dessas é uma técnica de gravura?",
      respostas: ["Aquarela", "Serigrafia", "Óleo sobre tela", "Pastel"],
      correta: 1,
    },
    {
      pergunta: "Qual é o principal elemento da composição artística?",
      respostas: ["Linha", "Cor", "Forma", "Textura"],
      correta: 0,
    },
  ],
  fisica: [
    {
      pergunta: "Qual é a unidade de medida da força no SI?",
      respostas: ["Newton", "Joule", "Watt", "Pascal"],
      correta: 0,
    },
    {
      pergunta: "Qual é a fórmula da velocidade média?",
      respostas: ["distância/tempo", "força/tempo", "massa/volume", "energia/tempo"],
      correta: 0,
    },
    {
      pergunta: "O que é energia cinética?",
      respostas: [
        "Energia armazenada",
        "Energia do movimento",
        "Energia térmica",
        "Energia elétrica",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual partícula tem carga negativa?",
      respostas: ["Próton", "Nêutron", "Elétron", "Fóton"],
      correta: 2,
    },
    {
      pergunta: "O que diz a primeira lei de Newton?",
      respostas: [
        "Corpo em repouso permanece em repouso",
        "Ação e reação são iguais",
        "Força é massa vezes aceleração",
        "Energia não se cria nem se destrói",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual a unidade de pressão?",
      respostas: ["Pascal", "Newton", "Joule", "Watt"],
      correta: 0,
    },
    {
      pergunta: "Qual é a fórmula da energia potencial gravitacional?",
      respostas: ["mgh", "mv²/2", "Fd", "P/t"],
      correta: 0,
    },
  ],
  matematica: [
    {
      pergunta: "Quanto é 12 x 8?",
      respostas: ["96", "86", "108", "112"],
      correta: 0,
    },
    {
      pergunta: "Qual o resultado de 15% de 200?",
      respostas: ["25", "30", "35", "40"],
      correta: 1,
    },
    {
      pergunta: "Qual é o valor de π (pi) arredondado?",
      respostas: ["3.14", "2.17", "3.33", "3.41"],
      correta: 0,
    },
    {
      pergunta: "Qual o resultado de √81?",
      respostas: ["7", "8", "9", "10"],
      correta: 2,
    },
    {
      pergunta: "Qual é a fórmula da área do círculo?",
      respostas: ["πr²", "2πr", "πd", "r²"],
      correta: 0,
    },
    {
      pergunta: "Quanto é 7 + 6 x 2?",
      respostas: ["26", "20", "19", "14"],
      correta: 2,
    },
    {
      pergunta: "Qual é o próximo número da sequência: 2, 4, 8, 16, ...?",
      respostas: ["18", "24", "32", "20"],
      correta: 2,
    },
  ],
  historia: [
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: [
        "Getúlio Vargas",
        "Juscelino Kubitschek",
        "Deodoro da Fonseca",
        "Dom Pedro II",
      ],
      correta: 2,
    },
    {
      pergunta: "Em que ano aconteceu a Proclamação da República?",
      respostas: ["1889", "1822", "1500", "1930"],
      correta: 0,
    },
    {
      pergunta: "Qual foi o período da Idade Média?",
      respostas: [
        "476 a 1453",
        "500 a 1500",
        "1492 a 1789",
        "1789 a 1815",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem foi o líder da Revolução Russa de 1917?",
      respostas: ["Lenin", "Stalin", "Trotsky", "Tsar Nicolau II"],
      correta: 0,
    },
    {
      pergunta: "Qual foi a principal causa da Primeira Guerra Mundial?",
      respostas: [
        "Imperialismo",
        "Assassinato do Arquiduque Francisco Ferdinando",
        "Revolução Industrial",
        "Crise econômica",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual civilização construiu as pirâmides do Egito?",
      respostas: ["Romanos", "Egípcios", "Maias", "Incas"],
      correta: 1,
    },
    {
      pergunta: "Qual foi o movimento de independência do Brasil?",
      respostas: [
        "Inconfidência Mineira",
        "Guerra dos Farrapos",
        "Independência em 1822",
        "Revolução Farroupilha",
      ],
      correta: 2,
    },
  ],
  geografia: [
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
      correta: 2,
    },
    {
      pergunta: "Qual país tem a maior população do mundo?",
      respostas: ["Índia", "China", "EUA", "Rússia"],
      correta: 1,
    },
    {
      pergunta: "Qual é a capital da França?",
      respostas: ["Londres", "Berlim", "Paris", "Madri"],
      correta: 2,
    },
    {
      pergunta: "Qual continente fica no hemisfério sul?",
      respostas: ["Europa", "África", "América do Norte", "Ásia"],
      correta: 1,
    },
    {
      pergunta: "Qual é o rio mais longo do mundo?",
      respostas: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
      correta: 1,
    },
    {
      pergunta: "Qual é o maior deserto do mundo?",
      respostas: ["Sahara", "Gobi", "Antártico", "Kalahari"],
      correta: 2,
    },
    {
      pergunta: "Qual país é conhecido como 'Terra do Sol Nascente'?",
      respostas: ["China", "Japão", "Coreia", "Tailândia"],
      correta: 1,
    },
  ],
  portugues: [
    {
      pergunta: "Qual é o sujeito na frase: 'O gato preto dorme no sofá'?",
      respostas: ["O gato preto", "dorme", "no sofá", "preto"],
      correta: 0,
    },
    {
      pergunta: "Qual é o verbo na frase: 'Eles correm rápido'?",
      respostas: ["Eles", "correm", "rápido", "nada"],
      correta: 1,
    },
    {
      pergunta: "Qual destas palavras é um advérbio?",
      respostas: ["rápido", "correndo", "casa", "feliz"],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do ponto final?",
      respostas: [
        "Indicar uma pergunta",
        "Indicar uma exclamação",
        "Indicar o fim da frase",
        "Separar orações",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o plural de 'animal'?",
      respostas: ["animais", "animais", "animalis", "animas"],
      correta: 0,
    },
    {
      pergunta: "Qual é o pronome pessoal na frase: 'Ela é minha amiga'?",
      respostas: ["Ela", "minha", "amiga", "é"],
      correta: 0,
    },
    {
      pergunta: "Qual é a classe gramatical da palavra 'livro'?",
      respostas: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
      correta: 0,
    },
  ],
};

const perguntaElement = document.getElementById('pergunta');
const respostasElement = document.getElementById('respostas');
const nextBtn = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

let materiaAtual = localStorage.getItem('materiaQuiz');
let perguntas = materias[materiaAtual];
let perguntaIndex = 0;
let score = 0;
let tempoRestante = 60;
let timerInterval = null;
let respondeu = false;

function iniciarTimer() {
  timerElement.textContent = `Tempo restante: ${tempoRestante}s`;
  timerInterval = setInterval(() => {
    tempoRestante--;
    timerElement.textContent = `Tempo restante: ${tempoRestante}s`;
    if (tempoRestante <= 0) {
      clearInterval(timerInterval);
      alert('Tempo esgotado! O quiz vai reiniciar.');
      reiniciarQuiz();
    }
  }, 1000);
}

function reiniciarQuiz() {
  perguntaIndex = 0;
  score = 0;
  tempoRestante = 60;
  scoreElement.textContent = '';
  nextBtn.disabled = true;
  iniciarTimer();
  mostrarPergunta();
}

function mostrarPergunta() {
  respondeu = false;
  nextBtn.disabled = true;

  const perguntaAtual = perguntas[perguntaIndex];
  perguntaElement.textContent = perguntaAtual.pergunta;

  respostasElement.innerHTML = '';
  perguntaAtual.respostas.forEach((resp, i) => {
    const btn = document.createElement('button');
    btn.classList.add('answer');
    btn.textContent = resp;
    btn.addEventListener('click', () => selecionarResposta(i, btn));
    respostasElement.appendChild(btn);
  });
}

function selecionarResposta(index, botao) {
  if (respondeu) return;

  respondeu = true;
  nextBtn.disabled = false;

  const correta = perguntas[perguntaIndex].correta;

  if (index === correta) {
    score++;
    botao.classList.add('selected');
  } else {
    botao.classList.add('selected');
    // Marca a correta
    Array.from(respostasElement.children).forEach((btn, i) => {
      if (i === correta) {
        btn.style.borderColor = '#00ff00';
        btn.style.fontWeight = '700';
      }
    });
  }
}

nextBtn.addEventListener('click', () => {
  perguntaIndex++;
  if (perguntaIndex >= perguntas.length) {
    clearInterval(timerInterval);
    mostrarResultado();
  } else {
    mostrarPergunta();
  }
});

function mostrarResultado() {
  perguntaElement.textContent = 'Quiz finalizado!';
  respostasElement.innerHTML = '';
  nextBtn.style.display = 'none';
  timerElement.style.display = 'none';
  scoreElement.textContent = `Você acertou ${score} de ${perguntas.length} perguntas.`;
}

if (!materiaAtual || !materias[materiaAtual]) {
  alert('Matéria inválida ou não selecionada. Voltando para a página inicial.');
  window.location.href = 'index.html';
} else {
  mostrarPergunta();
  iniciarTimer();
}
