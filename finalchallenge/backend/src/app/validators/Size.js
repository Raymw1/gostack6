const Joi = require("joi");

module.exports = {
  body: Joi.object({
    title: Joi.string().required(),
    value: Joi.number().required(),
    FileId: Joi.number(),
  }),
};
