import { useEffect, useState } from "react";
import { getQuestions, submitExam } from "../api/api";

export default function TakeExam({ examId, userId }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const qs = await getQuestions(examId);
      setQuestions(qs);
      // ⚠️ Aquí puedes ajustar la duración según tu backend
      setTimeLeft(60); // ejemplo: 60 segundos
    }
    fetchData();
  }, [examId]);

  // temporizador
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  function handleAnswer(qId, optionId) {
    setAnswers({ ...answers, [qId]: optionId });
  }

  async function handleSubmit() {
    const submission = {
      examId,
      userId,
      answers: Object.entries(answers).map(([qId, optionId]) => ({
        questionId: qId,
        optionId,
      })),
    };
    await submitExam(submission);
    alert("Examen enviado");
  }

  return (
    <div>
      <h2>Resolver Examen</h2>
      <p>Tiempo restante: {timeLeft} segundos</p>
      {questions.map((q) => (
        <div key={q.id}>
          <h4>{q.text}</h4>
          {q.options.map((op) => (
            <label key={op.id}>
              <input
                type="radio"
                name={q.id}
                value={op.id}
                onChange={() => handleAnswer(q.id, op.id)}
              />
              {op.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar examen</button>
    </div>
  );
}
