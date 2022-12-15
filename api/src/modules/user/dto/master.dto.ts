import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
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
  @Min(MasterScheduleConfig.config.startTime.minimum)
  @Max(MasterScheduleConfig.config.startTime.maximum)
  @IsNumber()
  readonly startTime: number;

  @ApiProperty(MasterScheduleConfig.config.endTime)
  @Min(MasterScheduleConfig.config.endTime.minimum)
  @Max(MasterScheduleConfig.config.endTime.maximum)
  @IsNumber()
  readonly endTime: number;

  @ApiProperty(MasterScheduleConfig.config.timezoneOffset)
  @Min(MasterScheduleConfig.config.timezoneOffset.minimum)
  @Max(MasterScheduleConfig.config.timezoneOffset.maximum)
  @IsNumber()
  readonly timezoneOffset: number;

  @ApiProperty(MasterScheduleConfig.config.data)
  @IsDateString()
  readonly date: Date;

  @ApiProperty(MasterScheduleConfig.config.dayOff)
  @IsBoolean()
  readonly dayOff: boolean;
}

export class GetMasterScheduleQueries {
  // @ApiProperty(General.config.)
  @IsOptional()
  @IsUUID()
  readonly id?: string;

  @IsDate()
  @IsOptional()
  readonly from?: string;

  @IsDate()
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
  @Min(MasterWeeklyScheduleConfig.config.endTime.minimum)
  @Max(MasterWeeklyScheduleConfig.config.endTime.maximum)
  @IsNumber()
  @IsOptional()
  readonly startTime: number;

  @ApiProperty(MasterWeeklyScheduleConfig.config.endTime)
  @Min(MasterWeeklyScheduleConfig.config.endTime.minimum)
  @Max(MasterWeeklyScheduleConfig.config.endTime.maximum)
  @IsNumber()
  @IsOptional()
  readonly endTime: number;

  @ApiProperty(MasterWeeklyScheduleConfig.config.timezoneOffset)
  @Min(MasterWeeklyScheduleConfig.config.timezoneOffset.minimum)
  @Max(MasterWeeklyScheduleConfig.config.timezoneOffset.maximum)
  @IsNumber()
  @IsOptional()
  readonly timezoneOffset: number;
}
