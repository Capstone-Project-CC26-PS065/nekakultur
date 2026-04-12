const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    return res.json({
      message: "Register berhasil",
      user,
    });

  } catch (err) {
    console.log("🔥 REGISTER ERROR:", err);

    return res.status(500).json({
      message: err.message, // 🔥 penting untuk debug
    });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 cek user
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        message: "User tidak ditemukan",
      });
    }

    // 🔐 cek password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password salah",
      });
    }

    // 🔑 cek JWT secret
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET belum diset di .env");
    }

    // 🪪 generate token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.log("🔥 LOGIN ERROR:", err);

    return res.status(500).json({
      message: err.message, // 🔥 BIAR KELIHATAN ERROR ASLI
    });
  }
};