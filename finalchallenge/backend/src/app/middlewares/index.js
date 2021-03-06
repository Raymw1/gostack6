const authMiddleware = require("./auth");
const providerMiddleware = require("./provider");
const productMiddleware = require("./product");
const typeMiddleware = require("./type");
const sizeMiddleware = require("./size");
const orderMiddleware = require("./order");

module.exports = {
  authMiddleware,
  providerMiddleware,
  productMiddleware,
  typeMiddleware,
  sizeMiddleware,
  orderMiddleware,
};
