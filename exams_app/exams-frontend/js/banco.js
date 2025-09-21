const form = document.getElementById("questionForm");
const list = document.getElementById("questionsList");

function loadQuestions() {
  const questions = JSON.parse(localStorage.getItem("questions")) || [];
  list.innerHTML = "";
  questions.forEach((q, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. [${q.type}] ${q.question}`;
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = document.getElementById("question").value;
  const type = document.getElementById("type").value;

  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  questions.push({ question, type });
  localStorage.setItem("questions", JSON.stringify(questions));

  form.reset();
  loadQuestions();
});

loadQuestions();
