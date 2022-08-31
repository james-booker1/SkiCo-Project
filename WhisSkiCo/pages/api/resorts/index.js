const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const resorts = await prisma.resort.findMany()
  res.json(resorts)
}