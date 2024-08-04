import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

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
  // constructor(
  //   private readonly appointmentModuleService: AppointmentModuleService,
  // ) {}
  // @ApiOperation({
  //   description: 'Create appointment',
  //   summary: 'Create appointment',
  // })
  // @ApiBearerAuth('Bearer')
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // async createAppointment(
  //   @GetUserFromRequest() user: IJwtTokenData,
  //   @Body() data: CreateAppointmentDto,
  // ) {
  //   return this.appointmentModuleService.createAppointment(user, data);
  // }
  // @ApiOperation({
  //   description: 'Get appointments list',
  //   summary: 'Get appointments list',
  // })
  // @ApiBearerAuth('Bearer')
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // async getAppointments(
  //   @GetUserFromRequest() user: IJwtTokenData,
  //   @Query() query: GetAppointmentQueriesDto,
  // ) {
  //   return this.appointmentModuleService.getAppointments(user, query);
  // }
  // @ApiOperation({
  //   summary: 'Cancel appointment',
  //   description: 'Cancel appointment',
  // })
  // @ApiBearerAuth('Bearer')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id/cancel')
  // async cancelAppointment(
  //   @Param('id') id: string,
  //   @GetUserFromRequest() user: IJwtTokenData,
  // ) {
  //   return this.appointmentModuleService.cancelAppointment(id, user);
  // }
  // @ApiOperation({
  //   description: 'Confirm appointment. Only master can config appointment',
  //   summary: 'Confirm appointment',
  // })
  // @ApiBearerAuth('Bearer')
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id/confirm')
  // async confirmAppointment(
  //   @Param('id') id: string,
  //   @GetUserFromRequest() user: IJwtTokenData,
  // ) {
  //   return this.appointmentModuleService.confirmAppointment(id, user);
  // }
}
