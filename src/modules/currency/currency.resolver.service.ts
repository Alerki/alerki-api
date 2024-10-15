import { Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class CurrencyResolverService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async getCurrencies() {
    return this.commonPrismaService.currency.findMany({});
  }
}
