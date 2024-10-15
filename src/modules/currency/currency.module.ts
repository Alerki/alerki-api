import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { CurrencyResolver } from './currency.resolver';
import { CurrencyResolverService } from './currency.resolver.service';
import { CurrencyService } from './currency.service';
import { CurrencyValidationService } from './currency-validation.service';

@Module({
  providers: [
    CurrencyResolver,
    CurrencyResolverService,
    CurrencyService,
    CurrencyValidationService,
  ],
  imports: [CommonPrismaModule],
  exports: [CurrencyService, CurrencyResolverService],
})
export class CurrencyModule {}
