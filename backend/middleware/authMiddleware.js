const jwt = require("jsonwebtoken");
const SECRET = "internship_secret_key";

module.exports = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, SECRET);
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded;
    next();
  };
};