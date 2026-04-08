const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const learningRoutes = require("./routes/learningRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/learning", learningRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "NekaKultur API berjalan! 🎉" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
