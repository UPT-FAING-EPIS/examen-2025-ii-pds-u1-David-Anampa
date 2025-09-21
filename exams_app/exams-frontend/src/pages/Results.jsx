import { useEffect, useState } from "react";
import { getResults } from "../api/api";

export default function Results({ userId }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getResults(userId);
      setResults(data);
    }
    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Mis Resultados</h2>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            Examen: {r.examTitle} | Puntuación: {r.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
