import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { ServicesModule } from '../services/services.module';
import { CurrencyModule } from '../currency/currency.module';
import { AuthModule } from '../auth/auth.module';
import { MasterScheduleModule } from '../master-schedule/master-schedule.module';

@Module({
  providers: [AppointmentService, AppointmentResolver],
  imports: [
    AuthModule,
    CommonPrismaModule,
    UserModule,
    MasterScheduleModule,
    ServicesModule,
    CurrencyModule,
  ],
  exports: [AppointmentService],
})
export class AppointmentModule {}
