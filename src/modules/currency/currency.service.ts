import { Injectable } from '@nestjs/common';
import { Currency, Prisma } from '@prisma/client';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { CurrencyValidationService } from './currency-validation.service';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly currencyValidationService: CurrencyValidationService,
  ) {}

  async findValidCurrency<ArgsT extends Prisma.CurrencyFindFirstArgs>(
    where: Partial<Pick<Currency, 'id'>>,
    args?: ArgsT,
  ) {
    try {
      const currency = await this.findValidCurrencyOrThrow(where, args);
      return currency;
    } catch (e) {
      return undefined;
    }
  }

  async findValidCurrencyOrThrow<ArgsT extends Prisma.CurrencyFindFirstArgs>(
    where: Partial<Pick<Currency, 'id'>>,
    args?: ArgsT,
  ) {
    const currency = await this.commonPrismaService.currency.findFirst({
      where,
      ...args,
    });

    this.currencyValidationService.isCurrencyDefined(currency, true);
    this.currencyValidationService.isCurrencyPublished(currency, true);

    return currency! as Prisma.CurrencyGetPayload<ArgsT>;
  }
}
