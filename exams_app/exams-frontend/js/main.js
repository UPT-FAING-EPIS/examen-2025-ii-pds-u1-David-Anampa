// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "docente" && password === "1234") {
    window.location.href = "docente.html";
  } else if (usuario === "alumno" && password === "1234") {
    window.location.href = "alumno.html";
  } else {
    document.getElementById("error").textContent = "Credenciales incorrectas";
  }
});

// CREAR EXAMEN
document.getElementById("crearExamenForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const fecha = document.getElementById("fechaLimite").value;
  const duracion = document.getElementById("duracion").value;

  document.getElementById("msgExamen").textContent =
    `✅ Examen "${titulo}" guardado. Fecha límite: ${fecha}, duración: ${duracion} min.`;
  e.target.reset();
});

// BANCO DE PREGUNTAS
document.getElementById("preguntaForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = document.getElementById("pregunta").value;
  const tipo = document.getElementById("tipo").value;

  const li = document.createElement("li");
  li.textContent = `${texto} [${tipo}]`;
  document.getElementById("listaPreguntas").appendChild(li);

  e.target.reset();
});

// EXAMEN CON TEMPORIZADOR
if (document.getElementById("timer")) {
  let tiempo = 300; // 5 minutos en segundos
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    let min = Math.floor(tiempo / 60);
    let sec = tiempo % 60;
    timerElement.textContent =
      `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

    if (tiempo <= 0) {
      clearInterval(interval);
      document.getElementById("examenForm").submit();
    }
    tiempo--;
  }, 1000);
}

// RESULTADO AL ENVIAR EXAMEN
document.getElementById("examenForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("resultado").textContent =
    "✅ Examen enviado correctamente. (Aquí se procesarían las respuestas)";
});
