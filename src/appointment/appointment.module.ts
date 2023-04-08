import { Module } from '@nestjs/common';

import { ClientProfileModule } from '../client/client-profile.module';
import { MasterProfileModule } from '../master/master-profile.module';
import { UserModule } from '../user/user.module';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './services/appointment.service';
import { AppointmentModuleService } from './services/appointment-module.service';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentModuleService, AppointmentService],
  imports: [UserModule, MasterProfileModule, ClientProfileModule],
  exports: [AppointmentService],
})
export class AppointmentModule {}
