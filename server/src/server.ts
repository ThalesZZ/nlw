import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const [port, host] = [3333, '0.0.0.0']

const app = fastify()

app.register(cors, { origin: true })
app.register(jwt, { secret: 'spacetime' })
app.register(memoriesRoutes)
app.register(authRoutes)

app.listen({ port, host }).then(() => {
  console.log(`Server running on port ${port}`)
})
