import { Module } from '@nestjs/common';

import { MasterServiceResolverService } from './master-service.resolver.service';
import { MasterServiceResolver } from './master-service.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ServicesModule } from '../services/services.module';
import { CurrencyModule } from '../currency/currency.module';
import { MasterServiceValidationService } from './master-service-validation.service';
import { MasterServiceService } from './master-service.service';
import { ProfileModule } from '../profile/profile.module';

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
