import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ClientProfileScalarWhereWithAggregatesInput {
  @Field(() => [ClientProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ClientProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ClientProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ClientProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ClientProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ClientProfileScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_created?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_updated?: DateTimeNullableWithAggregatesFilter;
}
