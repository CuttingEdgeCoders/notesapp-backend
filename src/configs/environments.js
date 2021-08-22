import dotEnv from 'dotenv'
import { supportedEnvs } from './constants.js'

let path = null

switch (process.env.NODE_ENV) {
  case supportedEnvs.PRODUCTION:
    path = `${process.env.PWD}/${supportedEnvs.PRODUCTION}.env`
    break
  default:
    path = `${process.env.PWD}/${supportedEnvs.DEVELOPMENT}.env`
}

dotEnv.config({ path })
