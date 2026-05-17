import API from "../api/api";

const getQuiz = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/quiz?level=beginner`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  console.log(data);
};

const updateProgress = async () => {
  const token = localStorage.getItem("token");

  await fetch(`${API}/api/progress`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      score: 80,
    }),
  });
};
