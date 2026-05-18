const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DB
const { connectDB } = require("./config/db");

// ROUTES
const userRoutes = require("./routes/userRoutes");
const learningRoutes = require("./routes/learningRoutes");
const quizRoutes = require("./routes/quizRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();

// ===============================
// 🔐 MIDDLEWARE GLOBAL
// ===============================

// CORS
app.use(cors());

// 🔥 IMPORTANT: JSON BODY PARSER
app.use(express.json());

// optional: support form-data/urlencoded
app.use(express.urlencoded({ extended: true }));

// LOG REQUEST
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("🚀 API NekaKultur Running");
});

app.get("/api", (req, res) => {
  res.json({ message: "API NekaKultur aktif ✅" });
});

// ===============================
// ROUTES
// ===============================
app.use("/api/users", userRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/progress", progressRoutes);

// ===============================
// ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
  console.error("🔥 ERROR:", err);

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

// ===============================
// START SERVER
// ===============================

const start = async () => {
  try {
    const { sequelize } = require("./config/db");
    await connectDB();
    await sequelize.sync();

    console.log("✅ Database Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server Error:", err);
    process.exit(1);
  }
};

start();
