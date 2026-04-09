const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

// Middleware custom
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFound");
const logger = require("./middleware/logger");

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();


// 🔐 Security Middleware
app.use(helmet());

// 🚫 Rate Limiting (anti spam / DDoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // max request
});
app.use(limiter);

// 🌍 CORS
app.use(cors());

// 🧠 Body Parser
app.use(express.json());

// 📡 Logger
app.use(logger);


// 🛣️ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/learning", require("./routes/learningRoutes"));


// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("🚀 NEKACULTURE API is running...");
});


// ❌ Not Found Middleware
app.use(notFound);

// 🔥 Error Handler
app.use(errorHandler);


// 🚀 Run Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
