import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class MasterScheduleScalarWhereWithAggregatesInput {
  @Field(() => [MasterScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<MasterScheduleScalarWhereWithAggregatesInput>;

  @Field(() => [MasterScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<MasterScheduleScalarWhereWithAggregatesInput>;

  @Field(() => [MasterScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<MasterScheduleScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  status?: StringWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_created?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_updated?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  date?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  startTime?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  endTime?: DateTimeNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  dayOff?: BoolWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  masterProfile?: UuidWithAggregatesFilter;
}
