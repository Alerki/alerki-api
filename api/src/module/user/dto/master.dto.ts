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
  MasterWeekSchedule,
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

  @IsDateString()
  readonly startTime: Date;

  @IsDateString()
  readonly endTime: Date;

  @IsBoolean()
  readonly dayOff: boolean;
}

export class PatchMasterWeekScheduleDto implements Pick<
  Prisma.MasterWeekSchedule,
  'monday' |
  'tuesday' |
  'wednesday' |
  'thursday' |
  'friday' |
  'saturday' |
  'sunday'
> {
  @ApiProperty(MasterWeekSchedule.config.monday)
  @IsOptional()
  @IsBoolean()
  readonly monday: boolean;

  @ApiProperty(MasterWeekSchedule.config.tuesday)
  @IsOptional()
  @IsBoolean()
  readonly tuesday: boolean;

  @ApiProperty(MasterWeekSchedule.config.wednesday)
  @IsOptional()
  @IsBoolean()
  readonly wednesday: boolean;

  @ApiProperty(MasterWeekSchedule.config.thursday)
  @IsOptional()
  @IsBoolean()
  readonly thursday: boolean;

  @ApiProperty(MasterWeekSchedule.config.friday)
  @IsOptional()
  @IsBoolean()
  readonly friday: boolean;

  @ApiProperty(MasterWeekSchedule.config.saturday)
  @IsOptional()
  @IsBoolean()
  readonly saturday: boolean;

  @ApiProperty(MasterWeekSchedule.config.sunday)
  @IsOptional()
  @IsBoolean()
  readonly sunday: boolean;
}
