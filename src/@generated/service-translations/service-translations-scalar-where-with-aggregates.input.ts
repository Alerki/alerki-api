import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class Service_translationsScalarWhereWithAggregatesInput {
  @Field(() => [Service_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<Service_translationsScalarWhereWithAggregatesInput>;

  @Field(() => [Service_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<Service_translationsScalarWhereWithAggregatesInput>;

  @Field(() => [Service_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<Service_translationsScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => UuidNullableWithAggregatesFilter, { nullable: true })
  Service_id?: UuidNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  languages_id?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;
}
