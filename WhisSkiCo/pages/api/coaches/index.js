const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const coaches = await prisma.coach.findMany()
  res.json(coaches)
}