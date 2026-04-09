require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// ================= SECURITY =================
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// ================= DATABASE =================
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ================= MODELS =================
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
}));

const Progress = mongoose.model("Progress", new mongoose.Schema({
  userId: String,
  score: Number,
  level: String,
  recommendation: String,
}));

// ================= MIDDLEWARE =================
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ================= ROUTES =================

// 🔐 REGISTER
app.post("/api/register", async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashed
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Email already used" });
  }
});

// 🔐 LOGIN
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.json({ token });
});

// 👤 GET PROFILE
app.get("/api/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// 🧠 UPDATE LEARNING
app.post("/api/learning", auth, async (req, res) => {
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
});

// 📊 GET PROGRESS
app.get("/api/progress", auth, async (req, res) => {
  const progress = await Progress.findOne({ userId: req.user.id });
  res.json(progress);
});

// ================= ROOT =================
app.get("/", (req, res) => {
  res.send("🚀 NEKACULTURE API LIVE");
});

// ================= START =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on ${PORT}`);
});
