const prisma = new PrismaClient()

export default async function handle(req, res) {
  const coaches = await prisma.coach.findmany()
  res.json(coaches)
}