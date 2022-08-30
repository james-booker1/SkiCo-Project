const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { course } = require('./data/courses');
const { resort } = require('./data/resorts');
const { user, admin } = require('./data/users');
const { coach } = require('./data/coaches');

async function seed() {
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.resort.deleteMany();
  await prisma.coach.deleteMany();


  for (const u of user) {
    await prisma.user.create({
      data: u
    })
  }
  for (const a of admin) {
    await prisma.admin.create({
      data: a
    })
  }
  for (const r of resort) {
    await prisma.resort.create({
      data: r
    })
  }
  for (const c of course) {
    await prisma.course.create({
      data: c
    })
  }
  for (const c of coach) {
    await prisma.coach.create({
      data: c
    })
  }
}
seed()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });