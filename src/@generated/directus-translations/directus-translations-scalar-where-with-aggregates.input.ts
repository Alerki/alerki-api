import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class directus_translationsScalarWhereWithAggregatesInput {
  @Field(() => [directus_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<directus_translationsScalarWhereWithAggregatesInput>;

  @Field(() => [directus_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<directus_translationsScalarWhereWithAggregatesInput>;

  @Field(() => [directus_translationsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<directus_translationsScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  language?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  key?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  value?: StringWithAggregatesFilter;
}
