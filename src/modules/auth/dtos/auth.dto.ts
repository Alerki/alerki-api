import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { LanguagesEnum } from '../../../shared/enums/languages.enum';

export class RegisterDto {
  @IsString()
  @ApiProperty({
    description: 'User e-mail',
    type: String,
    example: 'josh@mail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'User name',
    type: String,
    example: 'josh',
  })
  username: string;

  @IsString()
  @ApiProperty({
    description: 'Profile type, available values: client, master',
    type: String,
    example: 'client',
  })
  profileType: 'client' | 'master';

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'Josh01',
  })
  password: string;

  @IsString()
  @IsEnum(LanguagesEnum)
  @IsOptional()
  @ApiProperty({
    description: 'Language code',
    type: String,
    example: LanguagesEnum.English,
    required: false,
    default: LanguagesEnum.English,
  })
  language: LanguagesEnum;
}

export class LogInDto {
  @IsString()
  @ApiProperty({
    description: 'User e-mail',
    type: String,
    example: 'josh@mail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'Josh01',
  })
  password: string;
}

export class RefreshDto {
  @IsString()
  @ApiProperty({
    description: 'Refresh token',
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyMjI3ZGM1LWVlMDItNDFiZC04NTZkLTZlZDg1YzYzYmYwMCIsImlhdCI6MTcyMzMwMjE2OCwiZXhwIjoxNzI1ODk0MTY4fQ.ga1KQ2mbeaapAC7s8kKaUbnNy1lxDyhAvKlfVb2_dqw',
  })
  refreshToken: string;
}

export class LogOutDto extends RefreshDto {}

export class UpdateSessionDto {
  @IsString()
  @ApiProperty({
    description: 'Device name',
    type: String,
    example: 'iPhone 13',
  })
  deviceName: string;
}
