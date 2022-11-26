import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsBoolean,
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
  MasterService,
  MasterWeeklySchedule,
  Service,
} from '@Config/api/property.config';

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
  @ApiProperty(Service.config.name)
  @MinLength(Service.config.name.minLength)
  @MaxLength(Service.config.name.maxLength)
  @IsString()
  readonly name: string;

  @ApiProperty(MasterService.config.currency)
  @IsString()
  readonly currency: string;

  @ApiProperty(MasterService.config.price)
  @Min(MasterService.config.price.minimum)
  @IsNumber()
  readonly price: number;

  @ApiProperty(MasterService.config.duration)
  @Min(MasterService.config.duration.minimum)
  @Max(MasterService.config.duration.maximum)
  @IsNumber()
  readonly duration: number;

  @ApiProperty(MasterService.config.locationLat)
  @Min(MasterService.config.locationLat.minimum)
  @Max(MasterService.config.locationLat.maximum)
  @IsNumber()
  readonly locationLat: number;

  @ApiProperty(MasterService.config.locationLng)
  @Min(MasterService.config.locationLng.minimum)
  @Max(MasterService.config.locationLng.maximum)
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
  @ApiProperty(Service.config.available)
  @IsOptional()
  @IsBoolean()
  readonly available: boolean;

  @ApiProperty(Service.config.name)
  @IsOptional()
  @MinLength(Service.config.name.minLength)
  @MaxLength(Service.config.name.maxLength)
  @IsString()
  readonly name: string;

  @ApiProperty(MasterService.config.currency)
  @IsOptional()
  @IsString()
  readonly currency: string;

  @ApiProperty(MasterService.config.price)
  @IsOptional()
  @Min(MasterService.config.price.minimum)
  @IsNumber()
  readonly price: number;

  @ApiProperty(MasterService.config.duration)
  @IsOptional()
  @Min(MasterService.config.duration.minimum)
  @Max(MasterService.config.duration.maximum)
  @IsNumber()
  readonly duration: number;

  @ApiProperty(MasterService.config.locationLat)
  @IsOptional()
  @Min(MasterService.config.locationLat.minimum)
  @Max(MasterService.config.locationLat.maximum)
  @IsNumber()
  readonly locationLat: number;

  @ApiProperty(MasterService.config.locationLng)
  @IsOptional()
  @Min(MasterService.config.locationLng.minimum)
  @Max(MasterService.config.locationLng.maximum)
  @IsNumber()
  readonly locationLng: number;
}

export class CreateMasterScheduleDto implements Pick<
  Prisma.MasterSchedule,
  'startTime' |
  'endTime' |
  'date' |
  'dayOff'
> {
  @IsDateString()
  readonly date: Date;

  @IsNumber()
  readonly startTime: number;

  @IsNumber()
  readonly endTime: number;

  @IsBoolean()
  readonly dayOff: boolean;
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
  @ApiProperty(MasterWeeklySchedule.config.monday)
  @IsOptional()
  @IsBoolean()
  readonly monday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.tuesday)
  @IsOptional()
  @IsBoolean()
  readonly tuesday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.wednesday)
  @IsOptional()
  @IsBoolean()
  readonly wednesday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.thursday)
  @IsOptional()
  @IsBoolean()
  readonly thursday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.friday)
  @IsOptional()
  @IsBoolean()
  readonly friday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.saturday)
  @IsOptional()
  @IsBoolean()
  readonly saturday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.sunday)
  @IsOptional()
  @IsBoolean()
  readonly sunday: boolean;

  @ApiProperty(MasterWeeklySchedule.config.startTime)
  @Min(MasterWeeklySchedule.config.endTime.minimum)
  @Max(MasterWeeklySchedule.config.endTime.maximum)
  @IsNumber()
  @IsOptional()
  readonly startTime: number;

  @ApiProperty(MasterWeeklySchedule.config.endTime)
  @Min(MasterWeeklySchedule.config.endTime.minimum)
  @Max(MasterWeeklySchedule.config.endTime.maximum)
  @IsNumber()
  @IsOptional()
  readonly endTime: number;

  @ApiProperty(MasterWeeklySchedule.config.timezoneOffset)
  @Min(MasterWeeklySchedule.config.timezoneOffset.minimum)
  @Max(MasterWeeklySchedule.config.timezoneOffset.maximum)
  @IsNumber()
  @IsOptional()
  readonly timezoneOffset: number;
}
