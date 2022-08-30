-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Resort" DROP CONSTRAINT "Resort_adminId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "adminId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Resort" ALTER COLUMN "adminId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resort" ADD CONSTRAINT "Resort_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
