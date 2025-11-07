-- CreateTable
CREATE TABLE "Variables" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "TableRelated" TEXT,
    "FieldRelated" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Variables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Variables_key_key" ON "Variables"("key");
