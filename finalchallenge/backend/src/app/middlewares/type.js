const { Type } = require("../models");

module.exports = async (req, res, next) => {
  const type = await Type.findByPk(req.params.type_id || req.params.id, {
    include: "File",
  });
  if (!type) return res.status(404).json({ error: "Type not found!" });
  if (!(await req.product.hasType(type)))
    return res.status(401).json({ error: "Type from another product" });
  req.type = type;
  return next();
};
