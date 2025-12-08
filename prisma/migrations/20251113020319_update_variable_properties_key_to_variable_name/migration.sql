/*
  Warnings:

  - You are about to drop the column `key` on the `Variables` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[variableName]` on the table `Variables` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `variableName` to the `Variables` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Variables_key_key";

-- AlterTable
ALTER TABLE "Variables" DROP COLUMN "key",
ADD COLUMN     "variableName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Variables_variableName_key" ON "Variables"("variableName");
