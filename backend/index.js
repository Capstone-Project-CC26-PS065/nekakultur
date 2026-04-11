const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const learningRoutes = require("./routes/learningRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Rate limit
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/learning", learningRoutes);

// Test
app.get("/", (req, res) => {
  res.json({ message: "NekaKultur API berjalan 🚀" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});