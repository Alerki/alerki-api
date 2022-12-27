import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AppointmentControllerService } from '@Module/appointment/appointment-controller.service';
import { CreateAppointmentDto, GetAppointmentQueries } from '@Module/appointment/dto/appointment.dto';
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

  /**
   * Get appointment
   *
   * @param req request
   * @param queries queries
   * @returns appointment
   */
  @ApiOkResponse({ description: 'Get appointment' })
  @ApiBearerAuth('Bearer')
  @ApiOkResponse({ description: 'Got appointment successfully' })
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAppointment(
    @Req() req: ProtectedRequest,
    @Query() queries: GetAppointmentQueries,
  ) {
    return await this.appointmentControllerService.getAppointment(
      { id: req.user.id },
      queries,
    );
  }

  /**
   * Get appointment by ID
   *
   * @param id appointment ID
   * @returns appointment
   */
  @ApiOkResponse({ description: 'Got appointment successfully' })
  @ApiNotFoundResponse({ description: 'Appointment not exists' })
  @Get(':id')
  async getAppointmentById(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return await this.appointmentControllerService.getAppointmentById(
      { id },
    );
  }

  /**
   * Confirm appointment
   *
   * - only masters can confirm appointment
   *
   * @param req request
   * @param appointmentId appointment ID
   * @returns confirmed appointment
   */
  @ApiOperation({ description: 'Confirm appointment' })
  @ApiOkResponse({ description: 'Appointment confirmed successfully' })
  @ApiBadRequestResponse({ description: 'This appointment not belongs to you' })
  @UseGuards(JwtAuthGuard)
  @Post(':id/confirm')
  async confirmAppointment(
    @Req() req: ProtectedRequest,
    @Param('id') appointmentId: string,
  ) {
    return await this.appointmentControllerService.confirmAppointment(
      { id: req.user.id },
      { id: appointmentId },
    );
  }

  /**
   * Cancel appointment
   *
   * - clients and masters can cancel appointment
   *
   * @param req request
   * @param appointmentId appointment ID
   * @returns canceled appointment
   */
  @ApiOperation({ description: 'Cancel appointment' })
  @ApiOkResponse({ description: 'Appointment canceled successfully' })
  @ApiBadRequestResponse({ description: 'This appointment not belongs to you' })
  @UseGuards(JwtAuthGuard)
  @Post(':id/cancel')
  async cancelAppointment(
    @Req() req: ProtectedRequest,
    @Param('id') appointmentId: string,
  ) {
    return await this.appointmentControllerService.cancelAppointment(
      { id: req.user.id },
      { id: appointmentId },
    );
  }
}
