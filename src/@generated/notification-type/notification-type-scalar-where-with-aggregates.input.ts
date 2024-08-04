import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class NotificationTypeScalarWhereWithAggregatesInput {
  @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

  @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

  @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidNullableWithAggregatesFilter, { nullable: true })
  user_created?: UuidNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_created?: DateTimeNullableWithAggregatesFilter;

  @Field(() => UuidNullableWithAggregatesFilter, { nullable: true })
  user_updated?: UuidNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_updated?: DateTimeNullableWithAggregatesFilter;
}
