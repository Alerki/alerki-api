import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsDate,
  IsUUID,
} from 'class-validator';

import { AppointmentConfig } from '@Config/api/property.config';
import { Type } from 'class-transformer';

export class CreateAppointmentDto implements Pick<
  Prisma.Appointment,
  'masterServiceId' |
  'startTime'
> {
  @ApiProperty(AppointmentConfig.config.masterServiceId)
  @IsUUID()
  readonly masterServiceId: string;

  @ApiProperty(AppointmentConfig.config.startTime)
  @Type(() => Date)
  @IsDate()
  readonly startTime: Date;
}

export class GetAppointmentQueries {
  @Type(() => Boolean)
  readonly client?: boolean;

  @Type(() => Boolean)
  readonly master?: boolean;
}
