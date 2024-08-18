import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class CurrencyService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async getCurrencies() {
    return this.commonPrismaService.currency.findMany({});
  }

  async getCurrencyById(id: number) {
    return this.commonPrismaService.currency.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  async getExistingCurrencyById(id: number) {
    const currency = await this.getCurrencyById(id);

    if (!currency) {
      throw new BadRequestException('Currency is not exists');
    }

    return currency;
  }
}
