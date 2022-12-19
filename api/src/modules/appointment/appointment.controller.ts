import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AppointmentControllerService } from '@Module/appointment/appointment-controller.service';
import { CreateAppointmentDto } from '@Module/appointment/dto/appointment.dto';
import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';

/**
 * Appointment controller
 */
@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  /**
   * Appointment controller constructor
   *
   * @param appointmentControllerService appointment controller service
   */
  constructor(
    private readonly appointmentControllerService: AppointmentControllerService,
  ) { }


  /**
   * Create appointment
   *
   * @param req request
   * @param body body
   * @returns new appointment
   */
  @ApiOperation({ description: 'Create appointment' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Appointment created successfully' })
  @ApiBadRequestResponse(
    { description: 'You need to put your own ID to client or master ID' },
  )
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
