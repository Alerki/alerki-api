import Prisma from '@prisma/client';
import { IsDate, IsUUID } from 'class-validator';

export class CreateAppointmentDto implements Pick<
  Prisma.Appointment,
  'masterId' |
  'clientId' |
  'startTime' |
  'endTime'
> {
  @IsUUID()
  readonly masterId: string;

  @IsDate()
  readonly startTime: Date;

  @IsDate()
  readonly endTime: Date;

  @IsUUID()
  readonly clientId: string;
}
