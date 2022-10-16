import { prisma } from '@Shared/services/prisma.service';

export async function clearDatabase() {
  await prisma.authSession.deleteMany();
  await prisma.masterService.deleteMany();
  await prisma.user.deleteMany();
  await prisma.currency.deleteMany();
  await prisma.service.deleteMany();
}
