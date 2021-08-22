const { readFileSync, existsSync } = require('fs')
const { join } = require('path')
const dotEnv = require('dotenv')
const envSchema = require('./environment-schema')
const Joi = require('joi')

const env = process.env.NODE_ENV === 'production' ? '.env' : `${process.env.NODE_ENV}.env`
const filePath = join(process.env.PWD, env)
try {
  if (!existsSync(filePath)) {
    console.error('Envs not found')
    process.exit(1)
  }

  const parsedEnvs = dotEnv.parse(readFileSync(filePath))
  Joi.assert(parsedEnvs, envSchema)
  dotEnv.config({ path: filePath })
} catch (err) {
  console.log(err.details)
  process.exit(1)
}
