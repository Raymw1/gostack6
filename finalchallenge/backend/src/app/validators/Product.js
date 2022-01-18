const Joi = require("joi");

module.exports = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    preparation_time: Joi.number(),
    FileId: Joi.number(),
  }),
};
