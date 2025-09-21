import { useEffect, useState } from "react";
import { getExams } from "../api/api";

export default function Exams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getExams();
      setExams(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Exámenes disponibles</h1>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>
            {exam.title} - {exam.durationMinutes} min
          </li>
        ))}
      </ul>
    </div>
  );
}
