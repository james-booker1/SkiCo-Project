const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allcoaches = await prisma.course.findMany()
  console.log(allcoaches)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


// export default function Coaches() {
//   return (
//     <div class="pt-20">
//       <div >
//         <h1 >Meet our amazing WhisSkiCo team</h1>
//       </div>
//       <div>
//         Coaches loop goes here
//       </div>
//     </div>
//   )
// }