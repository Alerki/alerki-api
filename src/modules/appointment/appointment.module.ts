import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MasterScheduleModule } from '../master-schedule/master-schedule.module';
import { MasterServiceModule } from '../master-service/master-service.module';
import { ProfileModule } from '../profile/profile.module';

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
