import { Query, Resolver } from '@nestjs/graphql';

import { Currency } from '../../@generated';
import { CurrencyResolverService } from './currency.resolver.service';

@Resolver()
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyResolverService) {}

  @Query(() => [Currency])
  async getCurrencies() {
    return this.currencyService.getCurrencies();
  }
}
