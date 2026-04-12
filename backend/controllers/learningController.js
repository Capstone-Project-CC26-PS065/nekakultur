const materials = require("../data/materials");

// ✅ GET MATERIAL BY LEVEL
exports.getMaterials = (req, res) => {
  const { level } = req.query;

  if (!level) {
    return res.status(400).json({ message: "Level wajib diisi" });
  }

  const result = materials.filter(
    (m) => String(m.level) === String(level)
  );

  res.json(result);
};

// ✅ GET ALL MATERIALS (tambahan penting)
exports.getAllMaterials = (req, res) => {
  res.json(materials);
};

// ✅ GET MATERIAL BY ID
exports.getMaterialById = (req, res) => {
  const { id } = req.params;

  const materi = materials.find((m) => m.id == id);

  if (!materi) {
    return res.status(404).json({ message: "Materi tidak ditemukan" });
  }

  res.json(materi);
};

// ✅ ADD MATERIAL (ADMIN)
exports.addMaterial = (req, res) => {
  const { title, level, content } = req.body;

  if (!title || !level) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const newMaterial = {
    id: Date.now(),
    title,
    level,
    content: content || "",
  };

  materials.push(newMaterial);

  res.status(201).json({
    message: "Materi berhasil ditambahkan",
    data: newMaterial,
  });
};

// ✅ DELETE MATERIAL
exports.deleteMaterial = (req, res) => {
  const { id } = req.params;

  const index = materials.findIndex((m) => m.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Materi tidak ditemukan" });
  }

  materials.splice(index, 1);

  res.json({ message: "Materi berhasil dihapus" });
};