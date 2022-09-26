import Prisma from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  MinLength,
  MaxLength,
  IsString,
  IsOptional,
  Matches,
} from 'class-validator';

import { User } from '@Config/api/property.config';

/**
 * Log-in DTO interface
 */
interface SignInDtoI extends
  Partial<Pick<Prisma.User, 'email' | 'username'>>,
  Pick<Prisma.User, 'password'> {}

/**
 * Log-in DTO
 */
export class SignInDto implements SignInDtoI {
  @ApiProperty(User.config.email)
  @IsString()
  @IsOptional()
  @MinLength(User.config.email.minLength)
  @MaxLength(User.config.email.maxLength)
  @Matches(User.config.email.patternExp)
  readonly email?: string;

  @ApiProperty(User.config.username)
  @IsString()
  @IsOptional()
  @MinLength(User.config.username.minLength)
  @MaxLength(User.config.username.maxLength)
  @Matches(User.config.username.patternExp)
  readonly username?: string;

  @ApiProperty(User.config.password)
  @IsString()
  @MinLength(User.config.password.minLength)
  @MaxLength(User.config.password.maxLength)
  readonly password: string;
}

/**
 * Log-in DTO interface
 */
interface SignUpI extends Pick<
  Prisma.User,
  'email' |
  'username' |
  'password'
> {}

/**
 * Register DTO
 */
export class SignUpDto implements SignUpI {
  @ApiProperty(User.config.email)
  @IsString()
  @MinLength(User.config.email.minLength)
  @MaxLength(User.config.email.maxLength)
  @Matches(User.config.email.patternExp)
  readonly email: string;

  @ApiProperty(User.config.username)
  @IsString()
  @MinLength(User.config.username.minLength)
  @MaxLength(User.config.username.maxLength)
  @Matches(User.config.username.patternExp)
  readonly username: string;

  @ApiProperty(User.config.password)
  @IsString()
  @MinLength(User.config.password.minLength)
  @MaxLength(User.config.password.maxLength)
  readonly password: string;
}
