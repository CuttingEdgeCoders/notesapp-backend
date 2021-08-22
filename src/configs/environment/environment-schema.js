const Joi = require('joi')

const envSchema = Joi.object({
  PORT: Joi.number().integer().required(),
  MONGODB_HOST: Joi.string().required(),
  MONGODB_NAME: Joi.string().required(),
  MONGODB_USER: Joi.string().required(),
  MONGODB_PASS: Joi.string().required(),
  MONGODB_PORT: Joi.string().required(),
  MONGODB_SRV: Joi.boolean().required()
})
module.exports = envSchema
