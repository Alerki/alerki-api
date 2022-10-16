/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Currencies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Currencies_code_key" ON "Currencies"("code");
