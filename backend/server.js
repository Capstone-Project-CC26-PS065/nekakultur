require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFound");

connectDB();

const app = express();

// security
app.use(helmet());
app.use(cors());
app.use(express.json());

// rate limit
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// logger
app.use(logger);

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/learning", require("./routes/learningRoutes"));

// test
app.get("/", (req, res) => {
  res.send("🚀 NEKACULTURE API RUNNING");
});

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
