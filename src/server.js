import main from './main.js'
import logger from './utils/logger.js'
import { SERVER } from './configs/index.js'

const start = async () => {
  try {
    await main.listen(SERVER.PORT)
    logger.info(`Server running at http://localhost:${SERVER.PORT}`)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

start()
