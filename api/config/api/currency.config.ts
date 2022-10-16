import Prisma from '@prisma/client';

import * as CurrenciesList from './json/currencies-list.json';

interface Currency extends Pick<Prisma.Currency, 'code' | 'character'> { }

const currenciesWithCodes = (CurrenciesList as Currency[]).map(
  (currency: Currency) => currency.code,
);

const currenciesWithCharacters = (CurrenciesList as Currency[]).map(
  (currency: Currency) => currency.character,
);

export const currenciesRaw = CurrenciesList;
export const currenciesSet = new Set(currenciesRaw);
export const currenciesCharacterSet = new Set(currenciesWithCharacters);
export const currenciesCodeSet = new Set(currenciesWithCodes);

