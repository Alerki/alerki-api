import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

import { PaginationDto } from '../../shared/dto/Pagination.dto';

export class CreateAppointmentDto
  implements Pick<Prisma.Appointment, 'masterServiceId'>
{
  @ApiProperty({
    description: 'Master service ID',
    type: 'string',
  })
  @IsUUID()
  readonly masterServiceId: string;

  @ApiProperty({
    description: 'Appointment start time',
  })
  @IsString()
  readonly startAt: string;
}

export class GetAppointmentQueriesDto extends PaginationDto {
  @ApiProperty({
    description: 'Date to get appointments from',
    type: Date,
    required: true,
    example: new Date().toISOString(),
  })
  @IsDateString()
  readonly from: string;

  @ApiProperty({
    description: 'Date to get appointments to',
    type: Date,
    required: false,
    example: new Date().toISOString(),
  })
  @IsDateString()
  @IsOptional()
  readonly to: string;
}
