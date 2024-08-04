import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Directus_collectionsRelationFilter } from '../prisma/directus-collections-relation-filter.input';
import { Directus_collectionsListRelationFilter } from '../prisma/directus-collections-list-relation-filter.input';
import { Directus_sharesListRelationFilter } from '../prisma/directus-shares-list-relation-filter.input';
import { Directus_versionsListRelationFilter } from '../prisma/directus-versions-list-relation-filter.input';

@InputType()
export class directus_collectionsWhereInput {
  @Field(() => [directus_collectionsWhereInput], { nullable: true })
  AND?: Array<directus_collectionsWhereInput>;

  @Field(() => [directus_collectionsWhereInput], { nullable: true })
  OR?: Array<directus_collectionsWhereInput>;

  @Field(() => [directus_collectionsWhereInput], { nullable: true })
  NOT?: Array<directus_collectionsWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  collection?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  icon?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  note?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  display_template?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  hidden?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  singleton?: BoolFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  translations?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  archive_field?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  archive_app_filter?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  archive_value?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  unarchive_value?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  sort_field?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  accountability?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  color?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  item_duplication_fields?: JsonNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  sort?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  group?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  collapse?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  preview_url?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  versioning?: BoolFilter;

  @Field(() => Directus_collectionsRelationFilter, { nullable: true })
  directus_collections?: Directus_collectionsRelationFilter;

  @Field(() => Directus_collectionsListRelationFilter, { nullable: true })
  other_directus_collections?: Directus_collectionsListRelationFilter;

  @Field(() => Directus_sharesListRelationFilter, { nullable: true })
  directus_shares?: Directus_sharesListRelationFilter;

  @Field(() => Directus_versionsListRelationFilter, { nullable: true })
  directus_versions?: Directus_versionsListRelationFilter;
}
