const progress = require("../data/progress");

// GET PROGRESS USER
exports.getProgress = (req, res) => {
  const { userId } = req.params;

  const userProgress = progress.filter((p) => p.userId == userId);

  res.json(userProgress);
};

// UPDATE PROGRESS (MANUAL)
exports.updateProgress = (req, res) => {
  const { userId, completedMaterials } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID wajib" });
  }

  const newProgress = {
    userId,
    completedMaterials: completedMaterials || [],
  };

  progress.push(newProgress);

  res.json({
    message: "Progress diperbarui",
    data: newProgress,
  });
};