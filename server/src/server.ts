import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const port = 3333

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`)
})
