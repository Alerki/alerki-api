import { Query, Resolver } from '@nestjs/graphql';

import { CurrencyService } from './currency.service';
import { Currency } from '../../@generated';

@Resolver()
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}

  @Query(() => [Currency])
  async getCurrencies() {
    return this.currencyService.getCurrencies();
  }
}
