import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsWhereUniqueInput } from '../directus-translations/directus-translations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusTranslationsArgs {
  @Field(() => directus_translationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_translationsWhereUniqueInput)
  where!: directus_translationsWhereUniqueInput;
}
