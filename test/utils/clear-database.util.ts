import { PrismaClient } from '@prisma/client';

export const clearDatabaseUtil = async (prisma: PrismaClient) => {
  await prisma.service.deleteMany({});
  await prisma.session.deleteMany({});
  // await prisma.userEmail.deleteMany({});
  // await prisma.userPhoneNumber.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.clientProfile.deleteMany({});
  await prisma.masterProfile.deleteMany({});
  await prisma.masterWeeklySchedule.deleteMany({});
  await prisma.appointment.deleteMany({});
};
