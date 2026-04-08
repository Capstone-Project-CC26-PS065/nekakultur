const materials = require("../data/materials");

// Ambil materi berdasarkan level user (adaptive)
exports.getMaterialsByLevel = (req, res) => {
  const { level } = req.query;

  if (!level) {
    return res.status(400).json({
      message: "Level harus diisi (beginner/intermediate/advanced)",
    });
  }

  const filtered = materials.filter((m) => m.level === level);

  res.json({
    message: `Materi untuk level ${level}`,
    data: filtered,
  });
};

// Simulasi naik level (adaptive learning)
exports.updateLevel = (req, res) => {
  const { score } = req.body;

  let newLevel = "beginner";

  if (score >= 80) newLevel = "advanced";
  else if (score >= 50) newLevel = "intermediate";

  res.json({
    message: "Level berhasil diperbarui",
    level: newLevel,
  });
};