import { Module } from '@nestjs/common';

import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
