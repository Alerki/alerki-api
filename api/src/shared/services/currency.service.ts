import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';
import { currenciesCodeSet } from '@Config/api/currency.config';

/**
 * Currency service
 */
@Injectable()
export class CurrencyService {
  /**
   * Prisma service
   */
  readonly prismaService = prisma;

  /**
   * Cached currencies
   */
  private _currencies: Array<Prisma.Currency>;

  /**
   * Currency service constructor
   */
  constructor() { }

  /**
   * Get currency by code
   *
   * @param param0 currency code
   * @returns currency
   */
  async getByCode({ code }: Pick<Prisma.Currency, 'code'>) {
    // Check if code available
    if (!currenciesCodeSet.has(code)) {
      throw new BadRequestException('Unavailable currency code');
    };

    // Check fi _currencies exists
    if (!this._currencies) {
      this._currencies = await this.prismaService.currency.findMany();
    }

    return this._currencies.find(
      (currency: Prisma.Currency) => currency.code === code,
    ) as Prisma.Currency;
  }

  // /**
  //  * Get currency by ID
  //  *
  //  * @param param0 currency ID
  //  * @returns currency
  //  */
  // async getById({ id }: Pick<Prisma.Currency, 'id'>) {
  //   // Check fi _currencies exists
  //   if (!this._currencies) {
  //     this._currencies = await this.prismaService.currency.findMany();
  //   }

  //   return this._currencies.find(
  //     (currency: Prisma.Currency) => currency.id === id,
  //   );
  // }
}
