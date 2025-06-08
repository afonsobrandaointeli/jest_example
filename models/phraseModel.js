const Joi = require('joi');

const phraseSchema = Joi.object({
  text: Joi.string().min(10).max(255).required(),
  author: Joi.string().min(3).max(100).required()
});

module.exports = { phraseSchema };