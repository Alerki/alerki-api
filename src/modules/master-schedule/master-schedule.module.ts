import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import { MasterScheduleResolver } from './master-schedule.resolver';
import { MasterScheduleResolverService } from './master-schedule.resolver.service';
import { MasterScheduleService } from './master-schedule.service';
import { MasterScheduleValidationService } from './master-schedule-validatoin.service';

@Module({
  providers: [
    MasterScheduleResolver,
    MasterScheduleResolverService,
    MasterScheduleService,
    MasterScheduleValidationService,
  ],
  imports: [AuthModule, CommonPrismaModule, ProfileModule],
  exports: [MasterScheduleService, MasterScheduleValidationService],
})
export class MasterScheduleModule {}
