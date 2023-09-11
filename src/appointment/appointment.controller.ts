import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IJwtTokenData } from '../auth/interfaces';
import { GetUserFromRequest } from '../shared/decorators/get-user-from-request.decorator';
import {
  CreateAppointmentDto,
  GetAppointmentQueriesDto,
} from './dtos/appointment.dto';
import { AppointmentModuleService } from './services/appointment-module.service';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly appointmentModuleService: AppointmentModuleService,
  ) {}

  @ApiOperation({ description: 'Create appointment' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createAppointment(
    @GetUserFromRequest() user: IJwtTokenData,
    @Body() data: CreateAppointmentDto,
  ) {
    return this.appointmentModuleService.createAppointment(user, data);
  }

  @ApiQuery({
    name: 'master',
    description: 'Indicate to get appointment for master profile',
    type: 'boolean',
    example: true,
    required: false,
  })
  @ApiQuery({
    name: 'client',
    description: 'Indicate to get appointment for client profile',
    type: 'boolean',
    example: false,
    required: false,
  })
  @ApiOperation({ description: 'Get appointments list' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAppointments(
    @GetUserFromRequest() user: IJwtTokenData,
    @Query() query: GetAppointmentQueriesDto,
  ) {
    return this.appointmentModuleService.getAppointments(user, query);
  }
}
