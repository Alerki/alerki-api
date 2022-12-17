import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import {
  IsOptional, IsString, Matches, MaxLength, MinLength,
} from 'class-validator';

import { UserConfig } from '@Config/api/property.config';

/**
 * Log-in DTO interface
 */
interface SignInDtoI extends
  Partial<Pick<Prisma.User, 'email' | 'username'>>,
  Pick<Prisma.User, 'password'> { }

/**
 * Log-in DTO
 */
export class SignInDto implements SignInDtoI {
  @ApiProperty(UserConfig.config.email)
  @IsString()
  @IsOptional()
  @MinLength(UserConfig.config.email.minLength)
  @MaxLength(UserConfig.config.email.maxLength)
  @Matches(UserConfig.config.email.patternExp)
  readonly email?: string;

  @ApiProperty(UserConfig.config.username)
  @IsString()
  @IsOptional()
  @MinLength(UserConfig.config.username.minLength)
  @MaxLength(UserConfig.config.username.maxLength)
  @Matches(UserConfig.config.username.patternExp)
  readonly username?: string;

  @ApiProperty(UserConfig.config.password)
  @IsString()
  @MinLength(UserConfig.config.password.minLength)
  @MaxLength(UserConfig.config.password.maxLength)
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
> { }

/**
 * Register DTO
 */
export class SignUpDto implements SignUpI {
  @ApiProperty(UserConfig.config.email)
  @IsString()
  @MinLength(UserConfig.config.email.minLength)
  @MaxLength(UserConfig.config.email.maxLength)
  @Matches(UserConfig.config.email.patternExp)
  readonly email: string;

  @ApiProperty(UserConfig.config.username)
  @IsString()
  @MinLength(UserConfig.config.username.minLength)
  @MaxLength(UserConfig.config.username.maxLength)
  @Matches(UserConfig.config.username.patternExp)
  readonly username: string;

  @ApiProperty(UserConfig.config.password)
  @IsString()
  @MinLength(UserConfig.config.password.minLength)
  @MaxLength(UserConfig.config.password.maxLength)
  readonly password: string;
}
