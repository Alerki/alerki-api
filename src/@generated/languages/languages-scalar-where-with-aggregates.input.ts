import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class languagesScalarWhereWithAggregatesInput {
  @Field(() => [languagesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<languagesScalarWhereWithAggregatesInput>;

  @Field(() => [languagesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<languagesScalarWhereWithAggregatesInput>;

  @Field(() => [languagesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<languagesScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  direction?: StringNullableWithAggregatesFilter;
}
