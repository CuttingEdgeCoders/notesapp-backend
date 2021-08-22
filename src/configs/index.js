require('./environment/environment-check')
module.exports.DATABASE = {
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_NAME: process.env.MONGODB_NAME,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASS: process.env.MONGODB_PASS,
  MONGODB_PORT: process.env.MONGODB_PORT,
  MONGO_SRV: Boolean(process.env.MONGO_SRV)
}

module.exports.SERVER = {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV
}
