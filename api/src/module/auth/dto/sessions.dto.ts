import Prisma from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetSessionsQueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  readonly page: number = 0;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  readonly limit: number = 10;
}

export class PatchSessionBodyDto implements Pick<
  Prisma.AuthSession,
  'deviceName'
> {
  @IsString()
  readonly deviceName: string;
}
