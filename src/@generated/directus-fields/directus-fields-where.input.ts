import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class directus_fieldsWhereInput {
  @Field(() => [directus_fieldsWhereInput], { nullable: true })
  AND?: Array<directus_fieldsWhereInput>;

  @Field(() => [directus_fieldsWhereInput], { nullable: true })
  OR?: Array<directus_fieldsWhereInput>;

  @Field(() => [directus_fieldsWhereInput], { nullable: true })
  NOT?: Array<directus_fieldsWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  collection?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  field?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  special?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  interface?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  options?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  display?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  display_options?: JsonNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  readonly?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  hidden?: BoolFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  sort?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  width?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  translations?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  note?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  conditions?: JsonNullableFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  required?: BoolNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  group?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  validation?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  validation_message?: StringNullableFilter;
}
