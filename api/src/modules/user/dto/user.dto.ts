import { UserConfig } from '@Config/api/property.config';
import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsBase64, IsOptional, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserDto implements Prisma.User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  pictureId: string;
  clientProfileId: string;
  masterProfileId: string;
  phoneNumber: string;
  banned: boolean;
  roles: Prisma.Roles[];
  masterProfile: any;
  clientProfile: any;
  createdAt: Date;
  updatedAt: Date;

  @Exclude() password: string;

  constructor(data: Prisma.User) {
    Object.assign(this, data);
  }
}

export interface PatchUserI extends Pick<
  Prisma.User,
  'username' |
  'firstName' |
  'lastName' |
  'phoneNumber'
> { }

export class PatchUserDto implements PatchUserI {
  @ApiProperty(UserConfig.config.username)
  @IsString()
  @IsOptional()
  @MinLength(UserConfig.config.username.minLength)
  @MaxLength(UserConfig.config.username.maxLength)
  @Matches(UserConfig.config.username.patternExp)
  readonly username: string;

  @ApiProperty(UserConfig.config.firstName)
  @IsString()
  @IsOptional()
  @MaxLength(UserConfig.config.firstName.maxLength)
  readonly firstName: string;

  @ApiProperty(UserConfig.config.lastName)
  @IsString()
  @IsOptional()
  @MaxLength(UserConfig.config.lastName.maxLength)
  readonly lastName: string;

  @ApiProperty(UserConfig.config.phoneNumber)
  @IsPhoneNumber()
  @IsString()
  @IsOptional()
  readonly phoneNumber: string;
}
