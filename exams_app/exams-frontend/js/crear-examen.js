document.getElementById("examForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const time = document.getElementById("time").value;

  // Simulación: Guardar en localStorage
  let exams = JSON.parse(localStorage.getItem("exams")) || [];
  exams.push({ title, description, time });
  localStorage.setItem("exams", JSON.stringify(exams));

  alert("✅ Examen creado con éxito");
  window.location.href = "docente.html"; // Redirigir al panel docente
});
