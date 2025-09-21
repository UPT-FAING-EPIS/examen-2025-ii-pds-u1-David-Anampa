import { useState } from "react";
import { createExam } from "../api/api";

export default function CreateExam() {
  const [title, setTitle] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(30);

  async function handleSubmit(e) {
    e.preventDefault();
    const exam = { title, durationMinutes: Number(durationMinutes) };
    const res = await createExam(exam);
    alert("Examen creado con ID: " + res.id);
    setTitle("");
    setDurationMinutes(30);
  }

  return (
    <div>
      <h2>Crear nuevo examen</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Duración (minutos):
          <input
            type="number"
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
