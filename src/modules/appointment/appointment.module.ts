import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MasterScheduleModule } from '../master-schedule/master-schedule.module';
import { MasterServiceModule } from '../master-service/master-service.module';
import { ProfileModule } from '../profile/profile.module';
import { AppointmentResolver } from './appointment.resolver';
import { AppointmentService } from './appointment.service';

@Module({
  providers: [AppointmentService, AppointmentResolver],
  imports: [
    AuthModule,
    CommonPrismaModule,
    ProfileModule,
    MasterServiceModule,
    MasterScheduleModule,
  ],
  exports: [AppointmentService],
})
export class AppointmentModule {}
