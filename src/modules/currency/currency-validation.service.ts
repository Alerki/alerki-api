import { BadRequestException, Injectable } from '@nestjs/common';
import { Currency } from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class CurrencyValidationService {
  isCurrencyDefined(currency: Currency | null | undefined, throwError = false) {
    if (!currency) {
      if (throwError) {
        throw new BadRequestException(SystemCode.CURRENCY_NOT_EXISTS);
      }
      return false;
    }
    return true;
  }

  isCurrencyPublished(
    currency: Currency | null | undefined,
    throwError = false,
  ) {
    if (currency?.status !== StatusEnum.PUBLISHED) {
      if (throwError) {
        throw new BadRequestException(SystemCode.CURRENCY_UNAVAILABLE);
      }
      return false;
    }
    return true;
  }

  checkIfCurrencyAvailable(currency: Currency | null | undefined) {
    try {
      return this.checkIfCurrencyAvailableOrThrow(currency)!;
    } catch (e) {
      return false;
    }
  }

  checkIfCurrencyAvailableOrThrow(currency: Currency | null | undefined) {
    this.isCurrencyDefined(currency, true);
    this.isCurrencyPublished(currency, true);

    return currency;
  }
}
