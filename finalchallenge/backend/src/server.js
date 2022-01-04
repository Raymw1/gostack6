require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const validate = require("express-validation");
// const Youch = require("youch");
// const Sentry = require("@sentry/node");
// const databaseConfig
// const sentryConfig

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(morgan("combined"));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
