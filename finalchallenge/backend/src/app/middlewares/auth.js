const jwt = require("jsonwebtoken");
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
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
    req.userId = decoded.id;
    req.userProvider = decoded.provider;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token!" });
  }
};
