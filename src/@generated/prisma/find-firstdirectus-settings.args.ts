import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsWhereInput } from '../directus-settings/directus-settings-where.input';
import { Type } from 'class-transformer';
import { directus_settingsOrderByWithRelationAndSearchRelevanceInput } from '../directus-settings/directus-settings-order-by-with-relation-and-search-relevance.input';
import { directus_settingsWhereUniqueInput } from '../directus-settings/directus-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_settingsScalarFieldEnum } from './directus-settings-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusSettingsArgs {
  @Field(() => directus_settingsWhereInput, { nullable: true })
  @Type(() => directus_settingsWhereInput)
  where?: directus_settingsWhereInput;

  @Field(() => [directus_settingsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<directus_settingsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => directus_settingsWhereUniqueInput, { nullable: true })
  cursor?: directus_settingsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Directus_settingsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Directus_settingsScalarFieldEnum>;
}
