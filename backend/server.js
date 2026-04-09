require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

// middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFound");

// connect DB
connectDB();

const app = express();

// security
app.use(helmet());
app.use(cors());
app.use(express.json());

// rate limit
app.use(rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW * 60 * 1000 || 900000,
  max: process.env.RATE_LIMIT_MAX || 100
}));

// logger
app.use(logger);

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/learning", require("./routes/learningRoutes"));

// root
app.get("/", (req, res) => {
  res.send("🚀 NEKACULTURE API RUNNING");
});

// error handler
app.use(notFound);
app.use(errorHandler);

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
