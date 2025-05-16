-- CreateTable
CREATE TABLE "BloodCollectionTube" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodCollectionTube_pkey" PRIMARY KEY ("id")
);
