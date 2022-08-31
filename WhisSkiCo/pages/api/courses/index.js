const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const courses = await prisma.course.findMany()
  res.json(courses)
}