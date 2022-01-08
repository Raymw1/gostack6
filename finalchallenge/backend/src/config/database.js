require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  dialect: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  storage: "./__tests__/database.sqlite",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
