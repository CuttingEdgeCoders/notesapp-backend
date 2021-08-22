import pino from 'pino'
import { SERVER } from '../configs/index.js'
import { supportedEnvs } from '../configs/constants.js'
const logger = pino({
  level: SERVER.ENV === supportedEnvs.DEVELOPMENT ? 'debug' : 'error'
})

export default logger
