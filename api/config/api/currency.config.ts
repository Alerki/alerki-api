import * as CurrenciesList from './json/currencies-list.json';

export const currenciesListRaw = CurrenciesList;
export const currenciesList = new Set(currenciesListRaw);
