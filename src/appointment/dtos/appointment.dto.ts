import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

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
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly master?: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly client?: boolean;

  @IsDateString()
  readonly from: string;

  @IsDateString()
  @IsOptional()
  readonly to: string;
}
