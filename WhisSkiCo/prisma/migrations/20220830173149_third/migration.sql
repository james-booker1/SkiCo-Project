-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_resortId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "resortId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_resortId_fkey" FOREIGN KEY ("resortId") REFERENCES "Resort"("id") ON DELETE SET NULL ON UPDATE CASCADE;
