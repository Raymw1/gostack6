const authMiddleware = require("./auth");
const providerMiddleware = require("./provider");
const productMiddleware = require("./product");
const typeMiddleware = require("./type");

module.exports = {
  authMiddleware,
  providerMiddleware,
  productMiddleware,
  typeMiddleware,
};
