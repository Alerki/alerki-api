import { Module } from '@nestjs/common';

import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, AppointmentModule],
})
export class AppModule {}
