const express = require("express");
const router = express.Router();

const {
  getMaterials,
  addMaterial,
  deleteMaterial,
} = require("../controllers/learningController");

const { verifyToken } = require("../middleware/authMiddleware");

// Protected (harus login)
router.get("/materials", verifyToken, getMaterials);
router.post("/materials", verifyToken, addMaterial);
router.delete("/materials/:id", verifyToken, deleteMaterial);

module.exports = router;