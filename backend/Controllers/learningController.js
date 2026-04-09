const Progress = require("../models/Progress");

exports.updateLearning = async (req, res) => {
  const { score } = req.body;

  let level = "beginner";
  let recommendation = "materi dasar";

  if (score > 80) {
    level = "advanced";
    recommendation = "materi sulit";
  } else if (score > 50) {
    level = "intermediate";
    recommendation = "materi menengah";
  }

  const progress = await Progress.findOneAndUpdate(
    { userId: req.user.id },
    { score, level, recommendation },
    { new: true, upsert: true }
  );

  res.json(progress);
};
