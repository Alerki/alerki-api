import Prisma from '@prisma/client';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateMasterServiceDto implements Pick<
  Prisma.MasterService,
  'currency' |
  'price' |
  'duration' |
  'locationLat' |
  'locationLng'
> {
  @IsString()
  readonly name: string;

  @IsString()
  readonly currency: string;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsNumber()
  readonly duration: number;

  @IsNumber()
  readonly locationLat: number;

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
