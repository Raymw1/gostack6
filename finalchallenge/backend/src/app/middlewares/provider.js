module.exports = async (req, res, next) => {
  if (!req.userProvider)
    return res.status(401).json({ error: "Permission denied!" });
  return next();
};
