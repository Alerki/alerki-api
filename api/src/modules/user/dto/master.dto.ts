import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import {
  MasterScheduleConfig,
  MasterServiceConfig,
  MasterWeeklyScheduleConfig,
  ServiceConfig,
} from '@Config/api/property.config';
import { Type } from 'class-transformer';

export class CreateMasterServiceDto implements
  Pick<Prisma.Service, 'name'>,
  Pick<
    Prisma.MasterService,
    'price' |
    'duration' |
    'locationLat' |
    'locationLng'
  >
{
  @ApiProperty(ServiceConfig.config.name)
  @MinLength(ServiceConfig.config.name.minLength)
  @MaxLength(ServiceConfig.config.name.maxLength)
  @IsString()
  readonly name: string;

  @ApiProperty(MasterServiceConfig.config.currency)
  @IsString()
  readonly currency: string;

  @ApiProperty(MasterServiceConfig.config.price)
  @Min(MasterServiceConfig.config.price.minimum)
  @IsNumber()
  readonly price: number;

  @ApiProperty(MasterServiceConfig.config.duration)
  @Min(MasterServiceConfig.config.duration.minimum)
  @Max(MasterServiceConfig.config.duration.maximum)
  @IsNumber()
  readonly duration: number;

  @ApiProperty(MasterServiceConfig.config.locationLat)
  @Min(MasterServiceConfig.config.locationLat.minimum)
  @Max(MasterServiceConfig.config.locationLat.maximum)
  @IsNumber()
  readonly locationLat: number;

  @ApiProperty(MasterServiceConfig.config.locationLng)
  @Min(MasterServiceConfig.config.locationLng.minimum)
  @Max(MasterServiceConfig.config.locationLng.maximum)
  @IsNumber()
  readonly locationLng: number;
}

export class PatchMasterServiceDto implements Pick<
  Prisma.MasterService,
  'available' |
  'duration' |
  'price' |
  'locationLat' |
  'locationLng'
> {
  @ApiProperty(ServiceConfig.config.available)
  @IsOptional()
  @IsBoolean()
  readonly available: boolean;

  @ApiProperty(ServiceConfig.config.name)
  @IsOptional()
  @MinLength(ServiceConfig.config.name.minLength)
  @MaxLength(ServiceConfig.config.name.maxLength)
  @IsString()
  readonly name: string;

  @ApiProperty(MasterServiceConfig.config.currency)
  @IsOptional()
  @IsString()
  readonly currency: string;

  @ApiProperty(MasterServiceConfig.config.price)
  @IsOptional()
  @Min(MasterServiceConfig.config.price.minimum)
  @IsNumber()
  readonly price: number;

  @ApiProperty(MasterServiceConfig.config.duration)
  @IsOptional()
  @Min(MasterServiceConfig.config.duration.minimum)
  @Max(MasterServiceConfig.config.duration.maximum)
  @IsNumber()
  readonly duration: number;

  @ApiProperty(MasterServiceConfig.config.locationLat)
  @IsOptional()
  @Min(MasterServiceConfig.config.locationLat.minimum)
  @Max(MasterServiceConfig.config.locationLat.maximum)
  @IsNumber()
  readonly locationLat: number;

  @ApiProperty(MasterServiceConfig.config.locationLng)
  @IsOptional()
  @Min(MasterServiceConfig.config.locationLng.minimum)
  @Max(MasterServiceConfig.config.locationLng.maximum)
  @IsNumber()
  readonly locationLng: number;
}

export class CreateMasterScheduleDto implements Pick<
  Prisma.MasterSchedule,
  'startTime' |
  'endTime' |
  'timezoneOffset' |
  'dayOff' |
  'date'
> {
  @ApiProperty(MasterScheduleConfig.config.startTime)
  @Type(() => Date)
  @IsDate()
  readonly startTime: Date;

  @ApiProperty(MasterScheduleConfig.config.endTime)
  @Type(() => Date)
  @IsDate()
  readonly endTime: Date;

  @ApiProperty(MasterScheduleConfig.config.timezoneOffset)
  @Min(MasterScheduleConfig.config.timezoneOffset.minimum)
  @Max(MasterScheduleConfig.config.timezoneOffset.maximum)
  @IsNumber()
  readonly timezoneOffset: number;

  @ApiProperty(MasterScheduleConfig.config.data)
  @Type(() => Date)
  @IsDate()
  readonly date: Date;

  @ApiProperty(MasterScheduleConfig.config.dayOff)
  @IsBoolean()
  readonly dayOff: boolean;
}

export class GetMasterScheduleQueries {
  @IsDateString()
  @IsOptional()
  readonly from?: string;

  @IsDateString()
  @IsOptional()
  readonly to?: string;

  @IsOptional()
  @Type(() => Number)
  readonly year?: number;

  @IsOptional()
  @Type(() => Number)
  readonly month?: number;

  @IsOptional()
  @Type(() => Number)
  readonly date?: number;
}

export class PatchMasterScheduleDto implements Partial<Pick<
  Prisma.MasterSchedule,
  'timezoneOffset' |
  'startTime' |
  'endTime' |
  'dayOff'
>> {
  @ApiProperty(MasterScheduleConfig.config.startTime)
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly startTime?: Date;

  @ApiProperty(MasterScheduleConfig.config.endTime)
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly endTime?: Date;

  @ApiProperty(MasterScheduleConfig.config.timezoneOffset)
  @Min(MasterScheduleConfig.config.timezoneOffset.minimum)
  @Max(MasterScheduleConfig.config.timezoneOffset.maximum)
  @IsOptional()
  @IsNumber()
  readonly timezoneOffset?: number;

  @ApiProperty(MasterScheduleConfig.config.dayOff)
  @IsOptional()
  @IsBoolean()
  readonly dayOff?: boolean;
}

export class PatchMasterWeeklyScheduleDto implements Pick<
  Prisma.MasterWeeklySchedule,
  'monday' |
  'tuesday' |
  'wednesday' |
  'thursday' |
  'friday' |
  'saturday' |
  'sunday' |
  'startTime' |
  'endTime' |
  'timezoneOffset'
> {
  @ApiProperty(MasterWeeklyScheduleConfig.config.monday)
  @IsOptional()
  @IsBoolean()
  readonly monday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.tuesday)
  @IsOptional()
  @IsBoolean()
  readonly tuesday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.wednesday)
  @IsOptional()
  @IsBoolean()
  readonly wednesday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.thursday)
  @IsOptional()
  @IsBoolean()
  readonly thursday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.friday)
  @IsOptional()
  @IsBoolean()
  readonly friday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.saturday)
  @IsOptional()
  @IsBoolean()
  readonly saturday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.sunday)
  @IsOptional()
  @IsBoolean()
  readonly sunday: boolean;

  @ApiProperty(MasterWeeklyScheduleConfig.config.startTime)
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly startTime: Date;

  @ApiProperty(MasterWeeklyScheduleConfig.config.endTime)
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly endTime: Date;

  @ApiProperty(MasterWeeklyScheduleConfig.config.timezoneOffset)
  @Min(MasterWeeklyScheduleConfig.config.timezoneOffset.minimum)
  @Max(MasterWeeklyScheduleConfig.config.timezoneOffset.maximum)
  @IsNumber()
  @IsOptional()
  readonly timezoneOffset: number;
}
