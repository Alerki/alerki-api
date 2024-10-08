import { Module } from '@nestjs/common';

import { ServicesResolverService } from './services.resolver.service';
import { ServicesResolver } from './services.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ServicesValidationService } from './services-validation.service';
import { ServicesService } from './services.service';

@Module({
  providers: [
    ServicesResolverService,
    ServicesResolver,
    ServicesValidationService,
    ServicesService,
  ],
  imports: [CommonPrismaModule, AuthModule],
  exports: [ServicesValidationService, ServicesService],
})
export class ServicesModule {}
