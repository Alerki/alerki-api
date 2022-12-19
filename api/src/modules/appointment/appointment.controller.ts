import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { AppointmentControllerService } from '@Module/appointment/appointment-controller.service';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { CreateAppointmentDto } from '@Module/appointment/dto/appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly appointmentControllerService: AppointmentControllerService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createAppointment(
    @Req() req: ProtectedRequest,
    @Body() body: CreateAppointmentDto,
  ) {
    return await this.appointmentControllerService.createAppointment(
      { id: req.user.id },
      body,
    );
  }
}
