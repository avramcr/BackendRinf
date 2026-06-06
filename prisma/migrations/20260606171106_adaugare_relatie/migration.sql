/*
  Warnings:

  - Added the required column `utilizatorId` to the `Comanda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comanda" ADD COLUMN     "utilizatorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comanda" ADD CONSTRAINT "Comanda_utilizatorId_fkey" FOREIGN KEY ("utilizatorId") REFERENCES "Utilizator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
