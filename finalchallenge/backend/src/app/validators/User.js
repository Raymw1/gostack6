const Joi = require("joi");

module.exports = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    provider: Joi.boolean(),
  }),
};
