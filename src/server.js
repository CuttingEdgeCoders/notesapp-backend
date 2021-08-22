const logger = require('./utils/logger')
const { SERVER } = require('../configs/index')
const app = require('./app')

const start = async () => {
  try {
    await app.listen(SERVER.PORT)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

start()
