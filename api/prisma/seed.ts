import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.roles.createMany({
    data: [
      {
        name: 'client',
      },
      {
        name: 'master',
      },
    ],
  });
};

seed();
