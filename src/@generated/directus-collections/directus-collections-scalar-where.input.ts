import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class directus_collectionsScalarWhereInput {
  @Field(() => [directus_collectionsScalarWhereInput], { nullable: true })
  AND?: Array<directus_collectionsScalarWhereInput>;

  @Field(() => [directus_collectionsScalarWhereInput], { nullable: true })
  OR?: Array<directus_collectionsScalarWhereInput>;

  @Field(() => [directus_collectionsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_collectionsScalarWhereInput>;

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
}
