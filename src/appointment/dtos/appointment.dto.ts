import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateAppointmentDto
  implements Pick<Prisma.Appointment, 'masterServiceId' | 'startAt'>
{
  @ApiProperty({
    description: 'Master service ID',
    type: 'string',
  })
  @IsUUID()
  masterServiceId: string;

  @ApiProperty({
    description: 'Appointment start time',
  })
  @IsString()
  @Type(() => Date)
  startAt: Date;
}

export class GetAppointmentQueriesDto {
  @IsBoolean()
  @Type(() => Boolean)
  master?: boolean;

  @IsBoolean()
  @Type(() => Boolean)
  client?: boolean;
}
