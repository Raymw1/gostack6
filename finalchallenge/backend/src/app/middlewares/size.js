const { Size } = require("../models");

module.exports = async (req, res, next) => {
  const size = await Size.findByPk(req.params.id, {
    include: "File",
  });
  if (!size) return res.status(404).json({ error: "Size not found!" });
  if (!(await req.type.hasSize(size)))
    return res.status(401).json({ error: "Size from another product" });
  req.size = size;
  return next();
};
