import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

import { LanguagesEnum } from '../../../shared/enums/languages.enum';

@ArgsType()
export class FindServicesArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
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
