/*
  Warnings:

  - The `startTime` column on the `MasterWeeklySchedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `endTime` column on the `MasterWeeklySchedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "MasterWeeklySchedules" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP;
