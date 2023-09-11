import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

export class RegisterDto
  implements Pick<Prisma.User, 'email' | 'username' | 'password'>
{
  @ApiProperty({
    description: 'Email',
    type: 'string',
    example: 'guess@gmail.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Password',
    type: 'string',
    example: '12345678',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'Username',
    type: 'string',
    example: 'guess',
  })
  @IsString()
  readonly username: string;
}

export class LogInDto implements Pick<Prisma.User, 'password' | 'username'> {
  @ApiProperty({
    description: 'Password',
    type: 'string',
    example: '12345678',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'Username',
    type: 'string',
    example: 'guess',
  })
  @IsString()
  readonly username: string;
}
