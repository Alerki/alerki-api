import { Module, forwardRef } from '@nestjs/common';

import { AppointmentControllerService } from '@Module/appointment/appointment-controller.service';
import { AppointmentController } from '@Module/appointment/appointment.controller';
import { AppointmentService } from '@Module/appointment/appointment.service';
import { ProfileModule } from '@Module/profile/profile.module';
import { UserModule } from '@Module/user/user.module';

@Module({
  controllers: [
    AppointmentController,
  ],
  providers: [
    AppointmentService,
    AppointmentControllerService,
  ],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => ProfileModule),
  ],
  exports: [
    AppointmentService,
    AppointmentControllerService,
  ],
})
export class AppointmentModule { }