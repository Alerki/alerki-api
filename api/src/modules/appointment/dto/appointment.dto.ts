import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsDate,
  IsNumber,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

import { AppointmentConfig } from '@Config/api/property.config';
import { Type } from 'class-transformer';

export class CreateAppointmentDto implements Pick<
  Prisma.Appointment,
  'masterServiceId' |
  'clientId' |
  'startTime'
> {
  @ApiProperty(AppointmentConfig.config.clientId)
  @IsUUID()
  readonly clientId: string;

  @ApiProperty(AppointmentConfig.config.masterServiceId)
  @IsUUID()
  readonly masterServiceId: string;

  @ApiProperty(AppointmentConfig.config.startTime)
  @Type(() => Date)
  @IsDate()
  readonly startTime: Date;
}
