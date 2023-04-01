import Prisma from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

export class RegisterDto
  implements Pick<Prisma.User, 'email' | 'username' | 'password'>
{
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly username: string;
}

export class LogInDto implements Pick<Prisma.User, 'password' | 'username'> {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
