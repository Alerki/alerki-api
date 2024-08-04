import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsWhereInput } from '../service-translations/service-translations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceTranslationsArgs {
  @Field(() => Service_translationsWhereInput, { nullable: true })
  @Type(() => Service_translationsWhereInput)
  where?: Service_translationsWhereInput;
}
