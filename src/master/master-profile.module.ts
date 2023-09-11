import { Module } from '@nestjs/common';

import { MasterProfileService } from './services/master-profile.service';
import { MasterServiceService } from './services/master-service.service';
import { MasterWeeklyScheduleService } from './services/master-weekly-schedule.service';

@Module({
  controllers: [],
  providers: [
    MasterProfileService,
    MasterServiceService,
    MasterWeeklyScheduleService,
  ],
  imports: [],
  exports: [
    MasterProfileService,
    MasterServiceService,
    MasterWeeklyScheduleService,
  ],
})
export class MasterProfileModule {}
