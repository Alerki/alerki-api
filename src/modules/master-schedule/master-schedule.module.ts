import { Module } from '@nestjs/common';
import { MasterScheduleService } from './master-schedule.service';
import { MasterScheduleResolver } from './master-schedule.resolver';

@Module({
  providers: [MasterScheduleService, MasterScheduleResolver]
})
export class MasterScheduleModule {}
