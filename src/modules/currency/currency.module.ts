import { Module } from '@nestjs/common';

import { CurrencyService } from './currency.service';
import { CurrencyResolver } from './currency.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';

@Module({
  providers: [CurrencyService, CurrencyResolver],
  imports: [CommonPrismaModule],
  exports: [CurrencyService],
})
export class CurrencyModule {}
