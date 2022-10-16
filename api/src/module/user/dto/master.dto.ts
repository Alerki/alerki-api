import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

import { MasterService, Service } from '@Config/api/property.config';

export class CreateMasterServiceDto implements
  Pick<Prisma.Service, 'name'>,
  Pick<
    Prisma.MasterService,
    'currency' |
    'price' |
    'duration' |
    'locationLat' |
    'locationLng'
  >
{
  @ApiProperty(Service.config.name)
  @Min(Service.config.name.minLength)
  @Max(Service.config.name.maxLength)
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

export class MasterWorkDaysDto implements Pick<
  Prisma.MasterWorkDay,
  'monday' |
  'tuesday' |
  'wednesday' |
  'thursday' |
  'friday' |
  'saturday' |
  'sunday'
> {
  @IsBoolean()
  readonly monday: boolean;

  @IsBoolean()
  readonly tuesday: boolean;

  @IsBoolean()
  readonly wednesday: boolean;

  @IsBoolean()
  readonly thursday: boolean;

  @IsBoolean()
  readonly friday: boolean;

  @IsBoolean()
  readonly saturday: boolean;

  @IsBoolean()
  readonly sunday: boolean;
}
