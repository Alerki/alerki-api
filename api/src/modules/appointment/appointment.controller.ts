import { Controller } from '@nestjs/common';

import { AppointmentControllerService } from '@Module/appointment/appointment-controller.service';

@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly appointmentControllerService: AppointmentControllerService,
  ) { }
}
