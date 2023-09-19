import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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

export class UpdateUserDto
  implements Pick<Prisma.User, 'firstName' | 'lastName' | 'birthDate'>
{
  @ApiProperty({
    description: 'User first name',
    type: String,
    minLength: 1,
    maxLength: 32,
    required: false,
    example: 'John',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  @IsOptional()
  readonly firstName: string;

  @ApiProperty({
    description: 'User last name',
    type: String,
    minLength: 1,
    maxLength: 32,
    required: false,
    example: 'Doe',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  @IsOptional()
  readonly lastName: string;

  @ApiProperty({
    description: 'User birth date',
    type: String,
    required: false,
    example: new Date().toISOString(),
  })
  @IsOptional()
  @IsDateString()
  @Type(() => Date)
  readonly birthDate: Date;
}
