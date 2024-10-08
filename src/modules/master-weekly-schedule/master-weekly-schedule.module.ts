import { Module } from '@nestjs/common';

import { MasterWeeklyScheduleResolverService } from './master-weekly-schedule.resolver.service';
import { MasterWeeklyScheduleResolver } from './master-weekly-schedule.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MasterWeeklyScheduleService } from './master-weekly-schedule.service';
import { MasterWeeklyScheduleValidationService } from './master-weekly-schedule-validation.service';

@Module({
  providers: [
    MasterWeeklyScheduleResolverService,
    MasterWeeklyScheduleResolver,
    MasterWeeklyScheduleService,
    MasterWeeklyScheduleValidationService,
  ],
  imports: [CommonPrismaModule, AuthModule],
  exports: [MasterWeeklyScheduleService, MasterWeeklyScheduleValidationService],
})
export class MasterWeeklyScheduleModule {}
