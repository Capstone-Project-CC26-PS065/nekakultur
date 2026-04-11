const express = require("express");
const router = express.Router();

const {
  getProgress,
  updateProgress,
} = require("../controllers/progressController");

const { verifyToken } = require("../middleware/authMiddleware");

// Protected
router.get("/:userId", verifyToken, getProgress);
router.post("/", verifyToken, updateProgress);

module.exports = router;