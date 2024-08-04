import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AppointmentScalarWhereWithAggregatesInput {
  @Field(() => [AppointmentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AppointmentScalarWhereWithAggregatesInput>;

  @Field(() => [AppointmentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AppointmentScalarWhereWithAggregatesInput>;

  @Field(() => [AppointmentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AppointmentScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_created?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_updated?: DateTimeNullableWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  masterService?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  clientProfile?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  masterProfile?: UuidWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  duration?: DateTimeWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  price?: IntWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  currency?: UuidWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  startAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  endAt?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  confirmed?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  cancelled?: BoolWithAggregatesFilter;
}
