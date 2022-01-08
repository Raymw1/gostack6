require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const validate = require("express-validation");
const Youch = require("youch");
// const Sentry = require("@sentry/node");
// const databaseConfig
// const sentryConfig

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.middlewares();
    this.routes();
    this.exception();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(morgan("combined"));
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.statusCode).json(err);
      }

      if (process.env.NODE_ENV !== "production") {
        const youch = new Youch(err);
        return res.json(await youch.toJSON());
      }

      return res
        .status(err.status || 500)
        .json({ error: "Internal Server Error" });
    });
  }
}

module.exports = new App().express;
