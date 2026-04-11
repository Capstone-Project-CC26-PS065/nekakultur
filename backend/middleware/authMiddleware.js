const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "Token tidak ada" });
  }

  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token invalid" });
  }
};