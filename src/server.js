'use strict'
const main = require('./main')
const logger = require('./utils/logger')
const { SERVER: { PORT } } = require('./configs')

const start = async () => {
  try {
    await main.listen(PORT)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

start()
