-- CreateTable
CREATE TABLE "Configurations" (
    "id" TEXT NOT NULL,
    "dropboxRefresToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Configurations_pkey" PRIMARY KEY ("id")
);
