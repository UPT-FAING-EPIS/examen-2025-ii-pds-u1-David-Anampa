const BASE_URL = "https://localhost:5001/api"; // Cambia si tu backend está desplegado

export async function getExams() {
  const res = await fetch(`${BASE_URL}/exams`);
  return res.json();
}

export async function createExam(exam) {
  const res = await fetch(`${BASE_URL}/exams`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exam),
  });
  return res.json();
}

export async function getQuestions(examId) {
  const res = await fetch(`${BASE_URL}/questions/${examId}`);
  return res.json();
}

export async function submitExam(submission) {
  const res = await fetch(`${BASE_URL}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  return res.json();
}

export async function getResults(userId) {
  const res = await fetch(`${BASE_URL}/results/${userId}`);
  return res.json();
}
