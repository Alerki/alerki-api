import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';
import { currenciesCodeSet } from '@Config/api/currency.config';

@Injectable()
export class CurrencyService {
  readonly prismaService = prisma;
  private _currencies: Array<Prisma.Currency>;

  constructor() { }

  async find(data: Prisma.Prisma.CurrencyFindManyArgs = {}) {
    return await this.prismaService.currency.findMany(data);
  }

  async getByCode({ code }: Pick<Prisma.Currency, 'code'>) {
    if (!currenciesCodeSet.has(code)) {
      return undefined;
    };

    if (!this._currencies) {
      this._currencies = await this.find();
    }

    return this._currencies.find(
      (currency: Prisma.Currency) => currency.code === code,
    );
  }

  async getById({ id }: Pick<Prisma.Currency, 'id'>) {
    if (!this._currencies) {
      this._currencies = await this.find();
    }

    return this._currencies.find(
      (currency: Prisma.Currency) => currency.id === id,
    );
  }
}
