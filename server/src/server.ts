import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const port = 3333

const app = fastify()

app.register(cors, { origin: true })
app.register(memoriesRoutes)

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`)
})
