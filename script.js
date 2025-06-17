let quizzes = {};

fetch('script.js')
  .then(response => response.text())
  .then(data => {
    eval(data);
    iniciarQuiz();
  });

function iniciarQuiz() {
  let tema = new URLSearchParams(window.location.search).get("tema");
  let perguntas = quizzes[tema];
  let indice = 0;
  let pontos = 0;
  let tempoRestante = 120;

  const titulo = document.getElementById("quiz-title");
  const pergunta = document.getElementById("question");
  const respostas = document.getElementById("answers");
  const score = document.getElementById("score");
  const btnProxima = document.getElementById("next-btn");
  const btnVoltar = document.getElementById("back-btn");
  const btnProximoQuiz = document.getElementById("next-quiz-btn");
  const timer = document.getElementById("timer");

  if (!perguntas) {
    titulo.innerText = "Tema não encontrado.";
    return;
  } else {
    titulo.innerText = `Tema: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
    carregarPergunta();
    iniciarContador();
  }

  function iniciarContador() {
    const intervalo = setInterval(() => {
      tempoRestante--;
      timer.innerText = `Tempo restante: ${tempoRestante}s`;

      if (tempoRestante <= 0) {
        clearInterval(intervalo);
        alert("Tempo esgotado! Você voltará ao início.");
        window.location.href = "index.html";
      }
    }, 1000);
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

  window.nextQuestion = function () {
    if (indice < perguntas.length) {
      carregarPergunta();
    } else {
      mostrarResultado();
    }
  };

  function mostrarResultado() {
    pergunta.innerText = "Quiz finalizado!";
    respostas.innerHTML = "";
    score.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    btnProxima.style.display = "none";
    btnVoltar.style.display = "inline-block";
    btnProximoQuiz.style.display = "inline-block";
  }

  window.proximoQuiz = function () {
    const temas = Object.keys(quizzes);
    let atual = temas.indexOf(tema);
    let proximo = (atual + 1) % temas.length;
    window.location.href = `quiz.html?tema=${temas[proximo]}`;
  };
}
