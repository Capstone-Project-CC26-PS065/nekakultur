const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  level: String,
  recommendation: String
});

module.exports = mongoose.model("Progress", progressSchema);