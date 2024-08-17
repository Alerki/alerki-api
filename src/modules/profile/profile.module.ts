import { Module } from '@nestjs/common';

import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { AuthModule } from '../auth/auth.module';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';

@Module({
  providers: [ProfileService, ProfileResolver],
  imports: [CommonPrismaModule, AuthModule],
  exports: [],
})
export class ProfileModule {}
