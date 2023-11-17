import { forwardRef, Module } from '@nestjs/common';

import { AppointmentModule } from '../appointment/appointment.module';
import { UserModule } from '../user/user.module';
import { MasterProfileService } from './services/master-profile.service';
import { MasterScheduleService } from './services/master-schedule.service';
import { MasterServiceService } from './services/master-service.service';
import { MasterWeeklyScheduleService } from './services/master-weekly-schedule.service';

@Module({
  controllers: [],
  providers: [
    MasterProfileService,
    MasterServiceService,
    MasterWeeklyScheduleService,
    MasterScheduleService,
  ],
  imports: [forwardRef(() => UserModule), forwardRef(() => AppointmentModule)],
  exports: [
    MasterProfileService,
    MasterServiceService,
    MasterWeeklyScheduleService,
    MasterScheduleService,
  ],
})
export class MasterProfileModule {}
