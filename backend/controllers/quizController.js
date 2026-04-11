const quizzes = require("../data/quizzes");
const progress = require("../data/progress");

// GET QUIZ BY LEVEL
exports.getQuiz = (req, res) => {
  const { level } = req.query;

  const data = quizzes.filter((q) => q.level === level);

  res.json(data);
};

// SUBMIT QUIZ
exports.submitQuiz = (req, res) => {
  const { userId, answers } = req.body;

  if (!userId || !answers) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  let score = 0;

  quizzes.forEach((q) => {
    if (answers[q.id] === q.answer) {
      score += 100 / quizzes.length;
    }
  });

  // Tentukan level
  let level = "beginner";
  if (score >= 80) level = "advanced";
  else if (score >= 50) level = "intermediate";

  // Update progress
  progress.push({
    userId,
    score,
    level,
  });

  res.json({
    message: "Quiz selesai",
    score,
    level,
  });
};