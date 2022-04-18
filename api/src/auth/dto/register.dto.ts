import Prisma from '@prisma/client';
import {
  MinLength,
  MaxLength,
  IsString,
  IsEnum,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

interface IRegister extends Pick<Prisma.User, 'username' | 'email' | 'profileType' | 'password'> {}

export class RegisterDto implements IRegister {
  @ApiProperty({
    description: 'Username',
    minLength: 4,
    maxLength: 4,
    type: 'string',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  readonly username: string;

  @ApiProperty({
    description: 'Email',
    minLength: 5,
    maxLength: 319,
    type: 'string',
    pattern: '/\\w+@\\w+.\\w+/',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(319)
  @Matches(/\w+@\w+.\w+/)
  readonly email: string;

  @ApiProperty({
    description: 'User profile type',
    type: 'string',
    enum: ['master', 'client'],
  })
  @IsString()
  @IsEnum(['master', 'client'])
  readonly profileType: Prisma.ProfileType;

  @ApiProperty({
    description: 'Email',
    minLength: 4,
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  readonly password: string;
}