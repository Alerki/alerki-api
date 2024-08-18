import { Module } from '@nestjs/common';

import { MasterWeeklyScheduleService } from './master-weekly-schedule.service';
import { MasterWeeklyScheduleResolver } from './master-weekly-schedule.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [MasterWeeklyScheduleService, MasterWeeklyScheduleResolver],
  imports: [CommonPrismaModule, AuthModule],
})
export class MasterWeeklyScheduleModule {}
