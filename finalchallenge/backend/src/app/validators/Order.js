const Joi = require("joi");

module.exports = {
  body: Joi.object({
    observation: Joi.string(),
    cep: Joi.number().required(),
    street: Joi.string().required(),
    number: Joi.number().required(),
    neighborhood: Joi.string().required(),
    value: Joi.number().required(),
    sizes: Joi.array().items(Joi.number()).required().min(1),
  }),
};
