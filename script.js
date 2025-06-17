const perguntas = {
  matematica: [
    {
      pergunta: "Qual é a derivada de x²?",
      opcoes: ["2x", "x", "x²", "2"],
      resposta: "2x"
    },
    {
      pergunta: "Qual o resultado de 15 × (3 + 2)?",
      opcoes: ["75", "30", "45", "60"],
      resposta: "75"
    },
    {
      pergunta: "Quanto é 9 ÷ 3?",
      opcoes: ["2", "3", "4", "6"],
      resposta: "3"
    },
    {
      pergunta: "Qual é o valor de π (pi) até 2 casas decimais?",
      opcoes: ["3.14", "3.15", "3.13", "3.12"],
      resposta: "3.14"
    },
    {
      pergunta: "O que é um número primo?",
      opcoes: ["Divisível por 1 e por si mesmo", "Divisível por 2", "Divisível por 3", "Não divisível por nenhum número"],
      resposta: "Divisível por 1 e por si mesmo"
    },
    {
      pergunta: "Qual é o quadrado de 8?",
      opcoes: ["64", "16", "32", "80"],
      resposta: "64"
    },
    {
      pergunta: "Qual é o valor de 7! (7 fatorial)?",
      opcoes: ["5040", "120", "360", "240"],
      resposta: "5040"
    }
  ],
  ciencias: [
    {
      pergunta: "Qual é o nome da partícula com carga negativa?",
      opcoes: ["Elétron", "Próton", "Nêutron", "Fóton"],
      resposta: "Elétron"
    },
    {
      pergunta: "Qual é o gás mais abundante na atmosfera?",
      opcoes: ["Oxigênio", "Nitrogênio", "Gás Carbônico", "Hélio"],
      resposta: "Nitrogênio"
    },
    {
      pergunta: "O que é fotossíntese?",
      opcoes: ["Processo de produção de energia pelas plantas", "Reação química das plantas com o solo", "Troca de gases entre a planta e o ar", "Processo de decomposição de matéria orgânica"],
      resposta: "Processo de produção de energia pelas plantas"
    },
    {
      pergunta: "Qual é a célula responsável pela defesa do organismo?",
      opcoes: ["Neurônio", "Eritrócito", "Leucócito", "Plaqueta"],
      resposta: "Leucócito"
    },
    {
      pergunta: "O que é DNA?",
      opcoes: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína", "Carboidrato"],
      resposta: "Ácido desoxirribonucleico"
    },
    {
      pergunta: "Qual é o maior órgão do corpo humano?",
      opcoes: ["Coração", "Pulmão", "Fígado", "Pele"],
      resposta: "Pele"
    },
    {
      pergunta: "Como ocorre a respiração celular?",
      opcoes: ["Absorção de oxigênio", "Decomposição de matéria orgânica", "Transformação de energia química em calor", "Queima de gordura"],
      resposta: "Absorção de oxigênio"
    }
  ],
  historia: [
    {
      pergunta: "Quem proclamou a independência do Brasil?",
      opcoes: ["Dom Pedro I", "Dom João VI", "Tiradentes", "Getúlio Vargas"],
      resposta: "Dom Pedro I"
    },
    {
      pergunta: "Em que ano acabou a Segunda Guerra Mundial?",
      opcoes: ["1945", "1939", "1941", "1950"],
      resposta: "1945"
    },
    {
      pergunta: "Quem foi o imperador do Brasil durante o período imperial?",
      opcoes: ["Dom Pedro I", "Dom João VI", "Getúlio Vargas", "Juscelino Kubitschek"],
      resposta: "Dom Pedro I"
    },
    {
      pergunta: "Qual país iniciou a Revolução Francesa?",
      opcoes: ["França", "Inglaterra", "Alemanha", "Espanha"],
      resposta: "França"
    },
    {
      pergunta: "Qual foi o principal evento que marcou o fim da Idade Média?",
      opcoes: ["Queda do Império Romano", "Descobrimento da América", "Renascimento", "Queda de Constantinopla"],
      resposta: "Queda de Constantinopla"
    },
    {
      pergunta: "Qual foi a principal motivação da Primeira Guerra Mundial?",
      opcoes: ["Disputas territoriais", "Revoluções internas", "Expansão colonial", "Luta contra o imperialismo"],
      resposta: "Disputas territoriais"
    },
    {
      pergunta: "Quem foi o responsável pela unificação da Alemanha?",
      opcoes: ["Otto von Bismarck", "Napoleão Bonaparte", "Karl Marx", "Adolf Hitler"],
      resposta: "Otto von Bismarck"
    }
  ],
  portugues: [
    {
      pergunta: "Qual é o plural de 'cidadão'?",
      opcoes: ["Cidadões", "Cidadãos", "Cidades", "Cidões"],
      resposta: "Cidadãos"
    },
    {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["Excessão", "Execessão", "Exceção", "Exceçãoo"],
      resposta: "Exceção"
    },
    {
      pergunta: "Qual a função de um adjetivo?",
      opcoes: ["Descrever o sujeito", "Substituir o verbo", "Modifica o substantivo", "Expressar a ação"],
      resposta: "Modifica o substantivo"
    },
    {
      pergunta: "Qual é o sujeito da frase: 'O cachorro latiu'?",
      opcoes: ["O cachorro", "Latiu", "O cachorro latiu", "O verbo"],
      resposta: "O cachorro"
    },
    {
      pergunta: "Qual é a forma correta de escrever a palavra?",
      opcoes: ["Abissal", "Abissal", "Abisal", "Abisssial"],
      resposta: "Abissal"
    },
    {
      pergunta: "O que é uma crônica?",
      opcoes: ["História fictícia", "Relato de eventos históricos", "Texto sobre a realidade do cotidiano", "Texto informativo"],
      resposta: "Texto sobre a realidade do cotidiano"
    },
    {
      pergunta: "Como se chama a forma verbal usada para expressar um desejo?",
      opcoes: ["Imperativo", "Subjuntivo", "Indicativo", "Infinitivo"],
      resposta: "Subjuntivo"
    }
  ]
};

let perguntasAtual = [];
let indice = 0;
let tempo = 120;
let timer;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const quizContainer = document.getElementById("quiz-container");
const temaSelect = document.getElementById("tema");
const timerEl = document.getElementById("temporizador");
const feedbackEl = document.getElementById("feedback");
const resultadoEl = document.getElementById("resultado");
const pontuacaoEl = document.getElementById("pontuacao");

function iniciarQuiz() {
  const tema = temaSelect.value;
  perguntasAtual = [...perguntas[tema]];
  indice = 0;
  pontuacao = 0;
  document.getElementById("tema-container").classList.add("oculto");
  quizContainer.classList.remove("oculto");
  resultadoEl.classList.add("oculto");
  iniciarTemporizador();
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = perguntasAtual[indice];
  perguntaEl.textContent = perguntaAtual.pergunta;
  opcoesEl.innerHTML = "";
  feedbackEl.textContent = "";
  perguntaAtual.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(opcao);
    opcoesEl.appendChild(btn);
  });
}

function verificarResposta(opcao) {
  if (opcao === perguntasAtual[indice].resposta) {
    pontuacao++;
    feedbackEl.textContent = "Resposta correta!";
  } else {
    feedbackEl.textContent = "Resposta incorreta!";
  }
  indice++;
  if (indice < perguntasAtual.length) {
    setTimeout(mostrarPergunta, 1000);
  } else {
    setTimeout(mostrarResultado, 1000);
  }
}

function iniciarTemporizador() {
  tempo = 120;
  atualizarTemporizador();
  timer = setInterval(() => {
    tempo--;
    atualizarTemporizador();
    if (tempo === 0) {
      clearInterval(timer);
      setTimeout(mostrarResultado, 1000);
    }
  }, 1000);
}

function atualizarTemporizador() {
  timerEl.textContent = `Tempo restante: ${tempo}s`;
}

function mostrarResultado() {
  quizContainer.classList.add("oculto");
  resultadoEl.classList.remove("oculto");
  pontuacaoEl.textContent = `Você acertou ${pontuacao} de 7 questões.`;
}

function reiniciarQuiz() {
  document.getElementById("tema-container").classList.remove("oculto");
  resultadoEl.classList.add("oculto");
  quizContainer.classList.add("oculto");
}
