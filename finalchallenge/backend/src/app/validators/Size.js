const Joi = require("joi");

module.exports = {
  params: Joi.object({
    product_id: Joi.number().required(),
    type_id: Joi.number().required(),
  }),
  body: Joi.object({
    title: Joi.string().required(),
    value: Joi.number().required(),
    FileId: Joi.number(),
  }),
};
