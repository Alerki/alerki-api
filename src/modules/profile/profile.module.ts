import { forwardRef, Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MasterServiceModule } from '../master-service/master-service.module';
import { UserModule } from '../user/user.module';
import { ProfileResolver } from './profile.resolver';
import { ProfileResolverService } from './profile.resolver.service';
import { ProfileService } from './profile.service';
import { ProfileValidationService } from './profile-validation.service';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    ProfileResolverService,
    ProfileValidationService,
  ],
  imports: [
    CommonPrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    forwardRef(() => MasterServiceModule),
  ],
  exports: [ProfileService, ProfileValidationService],
})
export class ProfileModule {}
