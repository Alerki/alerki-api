import { Module } from '@nestjs/common';

import { ProfileResolverService } from './profile.resolver.service';
import { ProfileResolver } from './profile.resolver';
import { AuthModule } from '../auth/auth.module';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { ProfileValidationService } from './profile-validation.service';
import { ProfileService } from './profile.service';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    ProfileResolverService,
    ProfileValidationService,
  ],
  imports: [CommonPrismaModule, AuthModule],
  exports: [ProfileService, ProfileValidationService],
})
export class ProfileModule {}
