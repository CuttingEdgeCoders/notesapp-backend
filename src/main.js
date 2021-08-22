import fastify from 'fastify'
const app = fastify()

app.get('/health', async () => {
  return { ok: true }
})

export default app
