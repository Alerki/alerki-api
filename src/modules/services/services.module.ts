import { Module } from '@nestjs/common';

import { ServicesResolverService } from './services.resolver.service';
import { ServicesResolver } from './services.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ServicesValidationService } from './services-validation.service';
import { ServicesService } from './services.service';

@Module({
  providers: [
    ServicesResolver,
    ServicesResolverService,
    ServicesService,
    ServicesValidationService,
  ],
  imports: [AuthModule, CommonPrismaModule],
  exports: [ServicesService, ServicesValidationService],
})
export class ServicesModule {}
