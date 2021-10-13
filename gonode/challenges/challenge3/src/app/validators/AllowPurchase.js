const Joi = require("joi");

module.exports = {
  params: Joi.object({
    purchase: Joi.string().required(),
  }),
};
