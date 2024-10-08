import { Module } from '@nestjs/common';

import { CurrencyResolverService } from './currency.resolver.service';
import { CurrencyResolver } from './currency.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { CurrencyService } from './currency.service';
import { CurrencyValidationService } from './currency-validation.service';

@Module({
  providers: [
    CurrencyResolverService,
    CurrencyResolver,
    CurrencyService,
    CurrencyValidationService,
  ],
  imports: [CommonPrismaModule],
  exports: [CurrencyResolverService],
})
export class CurrencyModule {}
