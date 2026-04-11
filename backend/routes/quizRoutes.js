const express = require("express");
const router = express.Router();

const {
  getQuiz,
  submitQuiz,
} = require("../controllers/quizController");

const { verifyToken } = require("../middleware/authMiddleware");

// Protected
router.get("/", verifyToken, getQuiz);
router.post("/submit", verifyToken, submitQuiz);

module.exports = router;