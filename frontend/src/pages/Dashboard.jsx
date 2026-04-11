const getQuiz = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/quiz?level=beginner", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  console.log(data);
};

const updateProgress = async () => {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:5000/api/progress", {
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
