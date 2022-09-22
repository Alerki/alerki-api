import Prisma from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  MinLength,
  MaxLength,
  Length,
  IsString,
  IsOptional,
  Matches,
} from 'class-validator';

import { User } from '@Config/api/data.config';

export namespace SignIn {
  /**
   * Log-in DTO interface
   */
  interface I extends Pick<Prisma.User, 'password'> {
    email?: string;
    username?: string;
  }

  /**
   * Log-in DTO
   */
  export class Dto implements I {
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

    @ApiProperty(User.config.fingerprint)
    @IsString()
    @Length(User.config.fingerprint.length)
    readonly fingerprint: string;
  }
}

export namespace SignUp {
  /**
   * Log-in DTO interface
   */
  interface I extends Pick<
    Prisma.User,
    'email' |
    'username' |
    'password'
  > {}

  /**
   * Register DTO
   */
  export class Dto implements I {
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

    @ApiProperty(User.config.fingerprint)
    @IsString()
    @Length(User.config.fingerprint.length)
    readonly fingerprint: string;
  }
}

export namespace Refresh {
  /*
  * Refresh token DTO interface
  */
  interface I extends Pick<Prisma.AuthSession, 'fingerprint'> {}

  /*
  * Refresh token DTO interface
  */
  export class Dto implements I {
    @ApiProperty(User.config.fingerprint)
    @IsString()
    @Length(User.config.fingerprint.length)
    readonly fingerprint: string;
  }
}
