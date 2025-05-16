/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Exams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `InfectiousAgents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Sample` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Exams_name_key" ON "Exams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InfectiousAgents_name_key" ON "InfectiousAgents"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sample_name_key" ON "Sample"("name");
