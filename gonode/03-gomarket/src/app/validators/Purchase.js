const Joi = require("joi");

module.exports = {
  body: Joi.object({
    ad: Joi.string().required(),
    content: Joi.string().required(),
  }),
};
