import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @ApiProperty({
    description: 'User e-mail',
    type: String,
    example: 'josh@mail.com'
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'User name',
    type: String,
    example: 'josh'
  })
  username: string;

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'Josh01'
  })
  password: string;
}

export class LogInDto {
  @IsString()
  @ApiProperty({
    description: 'User e-mail',
    type: String,
    example: 'josh@mail.com'
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'Josh01'
  })
  password: string;
}
