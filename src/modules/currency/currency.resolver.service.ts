import { Injectable } from '@nestjs/common';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class CurrencyResolverService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async getCurrencies() {
    return this.commonPrismaService.currency.findMany({
      where: {
        status: StatusEnum.PUBLISHED,
      },
      orderBy: {
        sort: 'asc',
      },
    });
  }
}
