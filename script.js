const subjects = [
  "Ciências",
  "Inglês",
  "Artes",
  "Física",
  "Matemática",
  "História",
  "Geografia",
  "Português"
];

const container = document.getElementById("subject-cards");

subjects.forEach(subject => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = subject;
  card.addEventListener("click", () => {
    window.location.href = `quiz.html?subject=${encodeURIComponent(subject)}`;
  });
  container.appendChild(card);
});
