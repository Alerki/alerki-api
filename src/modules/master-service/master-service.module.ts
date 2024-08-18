import { Module } from '@nestjs/common';

import { MasterServiceService } from './master-service.service';
import { MasterServiceResolver } from './master-service.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ServicesModule } from '../services/services.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  providers: [MasterServiceService, MasterServiceResolver],
  imports: [CommonPrismaModule, AuthModule, ServicesModule, CurrencyModule],
})
export class MasterServiceModule {}
