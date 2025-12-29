/*
  Warnings:

  - Made the column `name` on table `ExamResultTemplate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fileName` on table `ExamResultTemplate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fileData` on table `ExamResultTemplate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mimeType` on table `ExamResultTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ExamResultTemplate" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "fileName" SET NOT NULL,
ALTER COLUMN "fileData" SET NOT NULL,
ALTER COLUMN "mimeType" SET NOT NULL;
