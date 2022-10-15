import { User } from '@Config/api/property.config';
import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsOptional, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

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
  @ApiProperty(User.config.username)
  @IsString()
  @IsOptional()
  @MinLength(User.config.username.minLength)
  @MaxLength(User.config.username.maxLength)
  @Matches(User.config.username.patternExp)
  readonly username: string;

  @ApiProperty(User.config.firstName)
  @IsString()
  @IsOptional()
  @MaxLength(User.config.firstName.maxLength)
  readonly firstName: string;

  @ApiProperty(User.config.lastName)
  @IsString()
  @IsOptional()
  @MaxLength(User.config.lastName.maxLength)
  readonly lastName: string;

  @ApiProperty(User.config.phoneNumber)
  @IsPhoneNumber()
  @IsString()
  @IsOptional()
  readonly phoneNumber: string;
}
