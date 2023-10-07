import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

import { BaseRowsDto } from '../../shared/dto/base.dto';
import { PaginationDto } from '../../shared/dto/Pagination.dto';

export class CreateMasterServiceDto
  implements Pick<Prisma.MasterService, 'duration' | 'price' | 'currency'>
{
  @ApiProperty({
    description: 'Service name',
    type: 'string',
    example: 'Haircut',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Currency',
    type: 'string',
    example: 'USD',
  })
  @IsString()
  currency: string;

  @ApiProperty({
    description: 'Service duration in milliseconds',
    type: 'number',
    example: 60 * 10,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    description: 'Service price',
    type: 'number',
    example: 10,
  })
  @IsNumber()
  price: number;
}

export class UpdateMasterServiceDto extends CreateMasterServiceDto {}

export const START_TIME = new Date(0);
START_TIME.setUTCHours(10);
export const END_TIME = new Date(0);
END_TIME.setUTCHours(18);

interface TimeI {
  startAt: string;
  endAt: string;
}

export class UpdateMasterWeeklyScheduleDto
  implements
    Pick<
      Prisma.MasterWeeklySchedule,
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday'
      | 'sunday'
    >,
    TimeI
{
  @ApiProperty({
    description: 'Represents that monday is working day',
    type: Boolean,
    example: false,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  readonly monday: boolean;

  @ApiProperty({
    description: 'Represents that tuesday is working day',
    type: Boolean,
    example: false,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  readonly tuesday: boolean;

  @ApiProperty({
    description: 'Represents that wednesday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  readonly wednesday: boolean;

  @ApiProperty({
    description: 'Represents that thursday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  readonly thursday: boolean;

  @ApiProperty({
    description: 'Represents that friday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  readonly friday: boolean;

  @ApiProperty({
    description: 'Represents that saturday is working day',
    type: Boolean,
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  readonly saturday: boolean;

  @ApiProperty({
    description: 'Represents that sunday is working day',
    type: Boolean,
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  readonly sunday: boolean;

  @ApiProperty({
    description: 'Usual start time',
    type: String,
    example: START_TIME,
    default: START_TIME,
  })
  @IsDateString()
  @IsOptional()
  readonly startAt: string;

  @ApiProperty({
    description: 'Usual end time',
    type: String,
    example: END_TIME,
    default: END_TIME,
  })
  @IsDateString()
  @IsOptional()
  readonly endAt: string;
}

export class MasterWeeklyScheduleDto
  extends BaseRowsDto
  implements Prisma.MasterWeeklySchedule
{
  @ApiProperty({
    description: 'Represents that monday is working day',
    type: Boolean,
    example: false,
    default: true,
  })
  readonly monday: boolean;

  @ApiProperty({
    description: 'Represents that tuesday is working day',
    type: Boolean,
    example: false,
    default: true,
  })
  readonly tuesday: boolean;

  @ApiProperty({
    description: 'Represents that wednesday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  readonly wednesday: boolean;

  @ApiProperty({
    description: 'Represents that thursday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  readonly thursday: boolean;

  @ApiProperty({
    description: 'Represents that friday is working day',
    type: Boolean,
    example: true,
    default: true,
  })
  readonly friday: boolean;

  @ApiProperty({
    description: 'Represents that saturday is working day',
    type: Boolean,
    example: false,
    default: false,
  })
  readonly saturday: boolean;

  @ApiProperty({
    description: 'Represents that sunday is working day',
    type: Boolean,
    example: false,
    default: false,
  })
  readonly sunday: boolean;

  @ApiProperty({
    description: 'Usual start time',
    type: Date,
    example: START_TIME,
    default: START_TIME,
  })
  readonly startAt: Date;

  @ApiProperty({
    description: 'Usual end time',
    type: Date,
    example: END_TIME,
    default: END_TIME,
  })
  readonly endAt: Date;
}

export class MasterScheduleDto
  extends BaseRowsDto
  implements Prisma.MasterSchedule
{
  @ApiProperty({
    description: 'Master profile ID',
    type: String,
    example: '1b37a681-d0d3-44bc-8717-a9fbeb0dee1c',
  })
  readonly masterProfileId: string;

  @ApiProperty({
    description: 'Date for the schedule',
    type: Date,
    example: new Date(),
  })
  readonly date: Date;

  @ApiProperty({
    description: 'Start time',
    type: Date,
    example: new Date(),
  })
  readonly startAt: Date | null;

  @ApiProperty({
    description: 'End time',
    type: Date,
    example: new Date(),
  })
  readonly endAt: Date | null;

  @ApiProperty({
    description: 'Day off',
    type: Boolean,
    example: false,
  })
  readonly dayOff: boolean;
}

interface TimesForCreateMasterScheduleDto {
  date: string;
  startAt?: string;
  endAt?: string;
}

export class CreateMasterScheduleDto
  implements
    Pick<Prisma.MasterSchedule, 'dayOff'>,
    TimesForCreateMasterScheduleDto
{
  @ApiProperty({
    description: 'Date for the schedule',
    type: Date,
    example: new Date(),
  })
  @IsDateString()
  readonly date: string;

  @ApiProperty({
    description: 'Start time',
    type: Date,
    example: new Date(),
  })
  @IsDateString()
  @IsOptional()
  readonly startAt?: string;

  @ApiProperty({
    description: 'End time',
    type: Date,
    example: new Date(),
  })
  @IsDateString()
  @IsOptional()
  readonly endAt?: string;

  @ApiProperty({
    description: 'Day off',
    type: Boolean,
    example: false,
  })
  @IsBoolean()
  readonly dayOff: boolean;
}

export class UpdateMasterScheduleDto
  implements
    Pick<Prisma.MasterSchedule, 'dayOff'>,
    Pick<TimesForCreateMasterScheduleDto, 'startAt' | 'endAt'>
{
  @ApiProperty({
    description: 'Start time',
    type: Date,
    example: new Date(),
  })
  @IsDateString()
  @IsOptional()
  readonly startAt?: string;

  @ApiProperty({
    description: 'End time',
    type: Date,
    example: new Date(),
  })
  @IsDateString()
  @IsOptional()
  readonly endAt?: string;

  @ApiProperty({
    description: 'Day off',
    type: Boolean,
    example: false,
  })
  @IsBoolean()
  readonly dayOff: boolean;
}

export class GetMasterScheduleQueryDto extends PaginationDto {
  @ApiProperty({
    description: 'Get schedule form the data',
    type: String,
    example: new Date().toISOString(),
    required: false,
  })
  @IsDateString()
  @IsOptional()
  readonly from?: string;

  @ApiProperty({
    description: 'Get schedule to the data',
    type: String,
    example: new Date().toISOString(),
    required: false,
  })
  @IsDateString()
  @IsOptional()
  readonly to?: string;

  @ApiProperty({
    description: 'Year to get schedule for',
    type: Number,
    example: 2023,
    required: false,
  })
  @IsNumberString()
  @Type(() => Number)
  @IsOptional()
  readonly year?: number;

  @ApiProperty({
    description: 'Year to get schedule for',
    type: Number,
    example: 10,
    required: false,
  })
  @IsNumberString()
  @Type(() => Number)
  @IsOptional()
  readonly month?: number;
}

export class GetMasterCalendarQueryDto {
  @ApiProperty({
    description: 'Year to get calendar for',
    type: String,
    example: 2023,
  })
  @IsNumberString()
  readonly year: string;

  @ApiProperty({
    description: 'Month to get calendar for',
    type: String,
    example: 10,
  })
  @IsNumberString()
  readonly month: string;
}

class CalendarDayDto {
  @ApiProperty({
    description: 'Date',
  })
  readonly date: number;
  readonly dayOff: boolean;
  readonly startAt: string;
  readonly endAt: string;
}

export class GetMasterCalendarResponseDto {
  month: number;
  year: number;
  calendar: any;
}
