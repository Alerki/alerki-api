import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { CurrencyModule } from '../currency/currency.module';
import { ProfileModule } from '../profile/profile.module';
import { ServicesModule } from '../services/services.module';
import { MasterServiceResolver } from './master-service.resolver';
import { MasterServiceResolverService } from './master-service.resolver.service';
import { MasterServiceService } from './master-service.service';
import { MasterServiceValidationService } from './master-service-validation.service';

@Module({
  providers: [
    MasterServiceResolverService,
    MasterServiceResolver,
    MasterServiceValidationService,
    MasterServiceService,
  ],
  imports: [
    AuthModule,
    CommonPrismaModule,
    CurrencyModule,
    ServicesModule,
    ProfileModule,
  ],
  exports: [MasterServiceService, MasterServiceValidationService],
})
export class MasterServiceModule {}
