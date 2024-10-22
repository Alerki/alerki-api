import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ServicesResolver } from './services.resolver';
import { ServicesResolverService } from './services.resolver.service';
import { ServicesService } from './services.service';
import { ServicesValidationService } from './services-validation.service';

@Module({
  providers: [
    ServicesResolver,
    ServicesResolverService,
    ServicesService,
    ServicesValidationService,
  ],
  imports: [AuthModule, CommonPrismaModule, UserModule],
  exports: [ServicesService, ServicesValidationService],
})
export class ServicesModule {}
