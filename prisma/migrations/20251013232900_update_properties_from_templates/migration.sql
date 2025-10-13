/*
  Warnings:

  - You are about to drop the column `content` on the `ExamResultTemplate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExamResultTemplate" DROP COLUMN "content",
ADD COLUMN     "fileName" TEXT,
ADD COLUMN     "filePath" TEXT;
