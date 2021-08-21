import { DATABASE } from '../configs/index.js'
import mongoose from 'mongoose'
import logger from '../utils/logger.js'
/**
 * Import the schemas here to load the models to mongoose instance
 */
import './schemas/notes.js'
import './schemas/attachments.js'
import './schemas/auth.js'
import './schemas/users.js'

export async function connectDb () {
  let uri = null
  if (DATABASE.MONGO_SRV) {
    uri = `mongodb+srv://${DATABASE.MONGODB_USER}:${DATABASE.MONGODB_PASS}@${DATABASE.MONGODB_HOST}/${DATABASE.MONGODB_NAME}?retryWrites=true&w=majority`
  } else {
    uri = `mongodb://${DATABASE.MONGODB_HOST}:${DATABASE.MONGODB_PORT}/${DATABASE.MONGODB_NAME}`
  }
  logger.debug(`Connected to ${uri}`)
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
