const Joi = require("joi");

module.exports = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  }),
};
