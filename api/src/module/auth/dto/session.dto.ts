import { User } from '@Config/api/property.config';
import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

export class GetSessionsQueryDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  readonly page: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  readonly limit: number = 10;
}

export class PatchSessionBodyDto implements Pick<
  Prisma.AuthSession,
  'deviceName'
> {
  @ApiProperty(User.config.deviceName)
  @IsString()
  readonly deviceName: string;
}