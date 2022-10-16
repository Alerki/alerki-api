import { prisma } from '@Shared/services/prisma.service';
import { currenciesRaw } from '@Config/api/currency.config';

/**
 * Database setup
 *
 * - create currencies records
 */
export async function databaseSetup() {
  // Find all currencies
  const currenciesCandidate = await prisma.currency.findMany();

  // If not exists create many
  if (!currenciesCandidate) {
    await prisma.currency.createMany({
      data: currenciesRaw,
    });
  } else if (currenciesCandidate.length !== currenciesRaw.length) {
    // Save currencies to create here
    const currenciesToCreate = [];

    // Check if currencies in database less or more that in json file
    if (currenciesCandidate.length < currenciesRaw.length) {
      for (const currency of currenciesRaw) {
        const candidate = await prisma.currency.findFirst({
          where: {
            code: currency.code,
          },
        });

        // If currency in database not exists add to create list
        if (!candidate) {
          currenciesToCreate.push(currency);
        }
      }

      // After all checks create currencies that required
      await prisma.currency.createMany({
        data: currenciesToCreate,
      });
    } else if (currenciesCandidate.length > currenciesRaw.length) {
      console.warn('There are extra currency');
    }
  }
}
