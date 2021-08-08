'use strict'
const fastify = require('fastify')
const app = fastify({ logger: true })

app.get('/health', async (req, rep) => {
  return { ok: true }
})

module.exports = app
