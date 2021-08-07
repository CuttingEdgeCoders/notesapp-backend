const env = require('./configs/environments');


process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})