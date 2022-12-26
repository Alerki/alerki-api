import { ServiceConfig } from '@Config/api/property.config';
import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class GetServicesDto implements Partial<Pick<Prisma.Service, 'name'>> {
  @ApiProperty(ServiceConfig.config.name)
  @IsOptional()
  @IsString()
  @MinLength(ServiceConfig.config.name.minLength)
  @MaxLength(ServiceConfig.config.name.maxLength)
  @Matches(ServiceConfig.config.name.patternExp)
  readonly name?: string;
}
