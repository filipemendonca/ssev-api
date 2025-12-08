-- CreateTable
CREATE TABLE "ExamResultTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamResultTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamResultTemplate_name_key" ON "ExamResultTemplate"("name");
