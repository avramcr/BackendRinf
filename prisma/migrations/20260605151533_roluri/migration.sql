/*
  Warnings:

  - The `status` column on the `Comanda` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('CLIENT', 'MANAGER', 'IT', 'FINANCIAR', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusComanda" AS ENUM ('CREATA', 'APROBARE_MANAGER', 'APROBARE_IT', 'APROBARE_FINANCIAR', 'FACTURATA', 'FINALIZATA', 'RESPINSA');

-- AlterTable
ALTER TABLE "Comanda" DROP COLUMN "status",
ADD COLUMN     "status" "StatusComanda" NOT NULL DEFAULT 'CREATA';

-- DropEnum
DROP TYPE "statusComanda";

-- CreateTable
CREATE TABLE "Utilizator" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "parola" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'CLIENT',
    "dataCrearii" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilizator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilizator_email_key" ON "Utilizator"("email");
