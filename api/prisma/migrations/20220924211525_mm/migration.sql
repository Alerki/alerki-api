-- DropForeignKey
ALTER TABLE "AuthSessions" DROP CONSTRAINT "AuthSessions_userId_fkey";

-- AlterTable
ALTER TABLE "AuthSessions" ALTER COLUMN "userId" SET DATA TYPE VARCHAR(36);

-- AddForeignKey
ALTER TABLE "AuthSessions" ADD CONSTRAINT "AuthSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
