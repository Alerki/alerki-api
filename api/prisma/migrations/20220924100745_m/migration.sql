/*
  Warnings:

  - You are about to drop the column `fingerprint` on the `AuthSessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AuthSessions" DROP COLUMN "fingerprint";
