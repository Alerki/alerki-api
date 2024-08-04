import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class directus_relationsScalarWhereWithAggregatesInput {
  @Field(() => [directus_relationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<directus_relationsScalarWhereWithAggregatesInput>;

  @Field(() => [directus_relationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<directus_relationsScalarWhereWithAggregatesInput>;

  @Field(() => [directus_relationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<directus_relationsScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  many_collection?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  many_field?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  one_collection?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  one_field?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  one_collection_field?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  one_allowed_collections?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  junction_field?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  sort_field?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  one_deselect_action?: StringWithAggregatesFilter;
}
