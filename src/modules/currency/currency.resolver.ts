import { Query, Resolver } from '@nestjs/graphql';

import { CurrencyResolverService } from './currency.resolver.service';
import { Currency } from '../../@generated';

@Resolver()
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyResolverService) {}

  @Query(() => [Currency])
  async getCurrencies() {
    return this.currencyService.getCurrencies();
  }
}
