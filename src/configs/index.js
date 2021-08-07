require('./environments')
module.exports = {
  DATABASE: {},
  SERVER: {
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV
  }
}
