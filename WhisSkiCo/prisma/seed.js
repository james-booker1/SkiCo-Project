const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { course } = require('./data/courses');
const { resort } = require('./data/resorts');
const { user, admin } = require('./data/users');

async function seed() {
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.resort.deleteMany();
}

for (const u of user){
  await prisma.user.create({
    data: u
  })
}
for (const a of admin){
  await prisma.user.create({
    data: a
  })
}
for (const r of resort){
  await prisma.user.create({
    data: r
  })
}
for (const c of course){
  await prisma.user.create({
    data: c
  })
}

seed()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });