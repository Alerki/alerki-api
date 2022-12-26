import { prisma } from '@Shared/services/prisma.service';

/**
 * Clear tables in database
 */
export async function clearDatabase() {
  await prisma.appointment.deleteMany();
  await prisma.masterService.deleteMany();
  await prisma.currency.deleteMany();
  await prisma.authSession.deleteMany();
  await prisma.masterWeeklySchedule.deleteMany();
  await prisma.masterSchedule.deleteMany();
  await prisma.service.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.notificationType.deleteMany();
  await prisma.user.deleteMany();
  await prisma.userPicture.deleteMany();
  await prisma.masterProfile.deleteMany();
  await prisma.clientProfile.deleteMany();
}
