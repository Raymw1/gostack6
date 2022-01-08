require("dotenv").config();

module.exports = {
  dialect: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
