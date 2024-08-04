import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsUpdateInput } from '../directus-translations/directus-translations-update.input';
import { Type } from 'class-transformer';
import { directus_translationsWhereUniqueInput } from '../directus-translations/directus-translations-where-unique.input';

@ArgsType()
export class UpdateOnedirectusTranslationsArgs {
  @Field(() => directus_translationsUpdateInput, { nullable: false })
  @Type(() => directus_translationsUpdateInput)
  data!: directus_translationsUpdateInput;

  @Field(() => directus_translationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_translationsWhereUniqueInput)
  where!: directus_translationsWhereUniqueInput;
}
