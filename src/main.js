const logger = require('./utils/logger')
const fastify = require('fastify')
const app = fastify({ logger })

app.get('/health', async () => {
  return { ok: true }
})

module.exports = app
