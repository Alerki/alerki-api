import {
  MinLength,
  MaxLength,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogInDto {
  @ApiProperty({
    description: 'Username',
    minLength: 4,
    maxLength: 15,
    type: 'string',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @ValidateIf(o => !o.email || o.username)
  readonly username?: string;

  @ApiProperty({
    description: 'Email',
    minLength: 5,
    maxLength: 319,
    type: 'string',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(319)
  @Matches(/\w+@\w+.\w+/)
  @ValidateIf(o => !o.username || o.email)
  readonly email?: string;

  @ApiProperty({
    description: 'Password',
    minLength: 4,
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  readonly password: string;
}
