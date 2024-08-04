import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsWhereUniqueInput } from '../directus-translations/directus-translations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_translationsCreateInput } from '../directus-translations/directus-translations-create.input';
import { directus_translationsUpdateInput } from '../directus-translations/directus-translations-update.input';

@ArgsType()
export class UpsertOnedirectusTranslationsArgs {
  @Field(() => directus_translationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_translationsWhereUniqueInput)
  where!: directus_translationsWhereUniqueInput;

  @Field(() => directus_translationsCreateInput, { nullable: false })
  @Type(() => directus_translationsCreateInput)
  create!: directus_translationsCreateInput;

  @Field(() => directus_translationsUpdateInput, { nullable: false })
  @Type(() => directus_translationsUpdateInput)
  update!: directus_translationsUpdateInput;
}
