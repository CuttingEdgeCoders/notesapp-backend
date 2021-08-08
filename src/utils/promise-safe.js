'use strict'
const logger = require('./logger')

process.on('unhandledRejection', err => {
  logger.error(err)
  process.exit(1)
})
