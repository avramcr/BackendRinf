/*
  Warnings:

  - You are about to drop the `comandaCreare` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "comandaCreare";

-- CreateTable
CREATE TABLE "Comanda" (
    "id" SERIAL NOT NULL,
    "titlu" TEXT NOT NULL,
    "descriere" TEXT,
    "categorie" TEXT NOT NULL,
    "suma" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATA',
    "dataCrearii" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comanda_pkey" PRIMARY KEY ("id")
);
