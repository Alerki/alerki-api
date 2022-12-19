import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsNumber,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

import { AppointmentConfig } from '@Config/api/property.config';

export class CreateAppointmentDto implements Pick<
  Prisma.Appointment,
  'masterServiceId' |
  'clientId' |
  'startTime' |
  'endTime' |
  'timezoneOffset'
> {
  @ApiProperty(AppointmentConfig.config.clientId)
  @IsUUID()
  readonly clientId: string;

  // @ApiProperty(AppointmentConfig.config.masterId)
  // @IsUUID()
  // readonly masterId: string;

  @ApiProperty(AppointmentConfig.config.masterServiceId)
  @IsUUID()
  readonly masterServiceId: string;

  @ApiProperty(AppointmentConfig.config.startTime)
  @Min(AppointmentConfig.config.startTime.minimum)
  @Max(AppointmentConfig.config.startTime.maximum)
  @IsNumber()
  readonly startTime: Date;

  @ApiProperty(AppointmentConfig.config.endTime)
  @Min(AppointmentConfig.config.endTime.minimum)
  @Max(AppointmentConfig.config.endTime.maximum)
  @IsNumber()
  readonly endTime: Date;

  @ApiProperty(AppointmentConfig.config.timezoneOffset)
  @Min(AppointmentConfig.config.timezoneOffset.minimum)
  @Max(AppointmentConfig.config.timezoneOffset.maximum)
  @IsNumber()
  readonly timezoneOffset: number;
}
