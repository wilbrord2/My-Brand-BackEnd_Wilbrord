const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");
  try {
  } catch (err) {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    res.user = verified;
    next();
    res.status(400).send("Invalid Token");
  }
};
