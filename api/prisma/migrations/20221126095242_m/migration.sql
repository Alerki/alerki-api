/*
  Warnings:

  - You are about to drop the column `endTimezoneOffset` on the `MasterWeeklySchedules` table. All the data in the column will be lost.
  - You are about to drop the column `startTimezoneOffset` on the `MasterWeeklySchedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MasterWeeklySchedules" DROP COLUMN "endTimezoneOffset",
DROP COLUMN "startTimezoneOffset",
ADD COLUMN     "timezoneOffset" INTEGER;
