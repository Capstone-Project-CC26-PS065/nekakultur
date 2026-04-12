const express = require("express");
const router = express.Router();

// ✅ IMPORT FULL OBJECT
const userController = require("../controllers/userController");

// TEST
router.get("/", (req, res) => {
  res.send("User API aktif ✅");
});

// ✅ PAKAI OBJECT
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;