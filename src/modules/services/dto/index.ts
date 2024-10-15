import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

import { Service } from '../../../@generated';
import { LanguagesEnum } from '../../../shared/enums/languages.enum';

@ArgsType()
export class FindServicesArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @IsEnum(LanguagesEnum)
  @IsOptional()
  language_code: LanguagesEnum;

  @Field(() => Number, { nullable: true, defaultValue: 10 })
  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  take: number;

  @Field(() => Number, { nullable: true, defaultValue: 0 })
  @IsNumber()
  @Min(0)
  @Max(1000)
  @IsOptional()
  skip: number;
}

@ObjectType()
export class ServiceOmitted extends OmitType(Service, [
  'MasterServices',
  'directus_users_Service_user_createdTodirectus_users',
  'directus_users_Service_user_updatedTodirectus_users',
  '_count',
]) {}
