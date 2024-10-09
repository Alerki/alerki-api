import { Module } from '@nestjs/common';

import { ProfileResolverService } from './profile.resolver.service';
import { ProfileResolver } from './profile.resolver';
import { AuthModule } from '../auth/auth.module';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { ProfileValidationService } from './profile-validation.service';
import { ProfileService } from './profile.service';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    ProfileResolverService,
    ProfileValidationService,
  ],
  imports: [CommonPrismaModule, AuthModule, UserModule, ProfileModule],
  exports: [ProfileService, ProfileValidationService],
})
export class ProfileModule {}
