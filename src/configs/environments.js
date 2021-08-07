const dotEnv = require('dotenv')
const { supportedEnvs } = require('./constants')

let path = null

switch (process.env.NODE_ENV) {
  case supportedEnvs.PRODUCTION:
    path = `/src/${supportedEnvs.PRODUCTION}.env`
    break
  default:
    path = `/src/${supportedEnvs.DEVELOPMENT}.env`
}

dotEnv.config({ path })
