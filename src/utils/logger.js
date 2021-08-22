import pino from 'pino'
import { SERVER } from '../configs/index.js'
import { supportedEnvs } from '../configs/constants.js'
export default pino({
  name: 'serverErrors',
  level: SERVER.ENV === supportedEnvs.DEVELOPMENT ? 'debug' : 'error'
})
