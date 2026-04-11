exports.calculateLevel = (score) => {
  if (score >= 80) return "advanced";
  if (score >= 50) return "intermediate";
  return "beginner";
};