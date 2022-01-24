const authMiddleware = require("./auth");
const providerMiddleware = require("./provider");
const productMiddleware = require("./product");
const typeMiddleware = require("./type");
const sizeMiddleware = require("./size");

module.exports = {
  authMiddleware,
  providerMiddleware,
  productMiddleware,
  typeMiddleware,
  sizeMiddleware,
};
