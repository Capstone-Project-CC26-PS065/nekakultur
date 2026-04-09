let users = require("../data/users");

// Register user
exports.registerUser = (req, res) => {
  const { name, level } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Nama wajib diisi" });
  }

  const newUser = {
    id: Date.now(),
    name,
    level: level || "beginner",
  };

  users.push(newUser);

  res.json({
    message: "User berhasil dibuat",
    data: newUser,
  });
};

// Get all users
exports.getUsers = (req, res) => {
  res.json(users);
};
