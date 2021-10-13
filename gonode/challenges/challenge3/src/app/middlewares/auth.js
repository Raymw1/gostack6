const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "Token not provided!" });
  const parts = authHeader.split(" ");
  const [scheme, token] = parts;
  if (parts.length !== 2 || !/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Token malformatted!" });
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token!" });
  }
};
