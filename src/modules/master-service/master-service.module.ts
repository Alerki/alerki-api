import { Module } from '@nestjs/common';

import { MasterServiceResolverService } from './master-service.resolver.service';
import { MasterServiceResolver } from './master-service.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ServicesModule } from '../services/services.module';
import { CurrencyModule } from '../currency/currency.module';
import { MasterServiceValidationService } from './master-service-validation.service';

@Module({
  providers: [
    MasterServiceResolverService,
    MasterServiceResolver,
    MasterServiceValidationService,
  ],
  imports: [CommonPrismaModule, AuthModule, ServicesModule, CurrencyModule],
})
export class MasterServiceModule {}
