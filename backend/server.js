require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

// middleware
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFound");
const logger = require("./middleware/logger");

// connect database
connectDB();

const app = express();

// security
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// logger
app.use(logger);

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/learning", require("./routes/learningRoutes"));

// test route
app.get("/", (req, res) => {
  res.send("🚀 NEKACULTURE API RUNNING");
});

// error handling
app.use(notFound);
app.use(errorHandler);

// run server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
