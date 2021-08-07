'use strict'
const { SERVER: { ENV } } = require('../configs')
const { supportedEnvs } = require('../configs/constants')
const logger = require('pino')({
  level: ENV === supportedEnvs.DEVELOPMENT ? 'debug' : 'error'
})
module.exports = logger
