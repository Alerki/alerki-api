import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import { MasterWeeklyScheduleResolver } from './master-weekly-schedule.resolver';
import { MasterWeeklyScheduleResolverService } from './master-weekly-schedule.resolver.service';
import { MasterWeeklyScheduleService } from './master-weekly-schedule.service';
import { MasterWeeklyScheduleValidationService } from './master-weekly-schedule-validation.service';

@Module({
  providers: [
    MasterWeeklyScheduleResolverService,
    MasterWeeklyScheduleResolver,
    MasterWeeklyScheduleService,
    MasterWeeklyScheduleValidationService,
  ],
  imports: [CommonPrismaModule, AuthModule, ProfileModule],
  exports: [MasterWeeklyScheduleService, MasterWeeklyScheduleValidationService],
})
export class MasterWeeklyScheduleModule {}
