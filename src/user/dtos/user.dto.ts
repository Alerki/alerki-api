import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PatchUserPictureDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  picture: Express.Multer.File;
}

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
  readonly birthDate: Date;
}
