import { Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { CurrencyService } from './currency.service';

@Injectable()
export class CurrencyResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly currencyService: CurrencyService,
  ) {}

  async getCurrencies() {
    return this.commonPrismaService.currency.findMany({});
  }
}
