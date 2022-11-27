import { currenciesRaw } from '@Config/api/currency.config';
import { prisma } from '@Shared/services/prisma.service';
import { databaseSetup } from '@Src/util';
import { clearDatabase } from '@Test/util/clear-database';

describe('Database setup utility test', () => {
  beforeAll(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await clearDatabase();
  });

  test('when no one currency not exists in database', async () => {
    const currenciesBefore = await prisma.currency.findMany();

    expect(currenciesBefore).toHaveLength(0);

    await databaseSetup();

    const currenciesAfter = await prisma.currency.findMany();

    expect(currenciesAfter).toHaveLength(currenciesRaw.length);
  });

  describe(
    'when currencies from json and database has different length',
    () => {
      test('DB < JSON', async () => {
        const currencies = await prisma.currency.findMany();

        await prisma.currency.delete({
          where: {
            id: currencies[0].id,
          },
        });

        await databaseSetup();
      });

      test('DB > JSON', async () => {
        await databaseSetup();

        await prisma.currency.create({
          data: {
            code: '000',
            character: '0',
          },
        });

        await expect(async () => {
          await databaseSetup();
        }).rejects.toThrow('There are extra currency');
      });
    },
  );
});
