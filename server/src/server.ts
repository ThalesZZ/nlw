import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'
import multipart from '@fastify/multipart'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'
import fastifyStatic from '@fastify/static'
import { resolve } from 'node:path'

const [port, host] = [3333, '0.0.0.0']

const app = fastify()

app.register(multipart)
app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, { origin: true })
app.register(jwt, { secret: 'spacetime' })
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.listen({ port, host }).then(() => {
  console.log(`Server running on port ${port}`)
})
