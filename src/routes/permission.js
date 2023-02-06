import jwt from "jsonwebtoken";

const permission = (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) return res.status(401).send("you should first login");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    res.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
const adminPermissions = (req, res, next) => {
  const admintToken = req.header("authtoken");
  if (!admintToken) return res.status(401).send("access denied");
  try {
    const verified = jwt.verify(admintToken, process.env.TOKEN_SECRET);
    res.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
export { permission, adminPermissions };
