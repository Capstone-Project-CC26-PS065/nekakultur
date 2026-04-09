const express = require("express");
const router = express.Router();

const {
  getMaterialsByLevel,
  updateLevel,
} = require("../controllers/learningController");

router.get("/materials", getMaterialsByLevel);
router.post("/update-level", updateLevel);

module.exports = router;