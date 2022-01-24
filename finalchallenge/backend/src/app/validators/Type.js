const Joi = require("joi");

module.exports = {
  body: Joi.object({
    title: Joi.string().required(),
    FileId: Joi.number(),
  }),
};
