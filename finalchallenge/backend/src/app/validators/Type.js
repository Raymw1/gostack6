const Joi = require("joi");

module.exports = {
  params: Joi.object({
    product_id: Joi.number().required(),
  }),
  body: Joi.object({
    title: Joi.string().required(),
    FileId: Joi.number(),
  }),
};
