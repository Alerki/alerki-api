import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserSenderOnNotificationScalarWhereWithAggregatesInput {
  @Field(() => [UserSenderOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<UserSenderOnNotificationScalarWhereWithAggregatesInput>;

  @Field(() => [UserSenderOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<UserSenderOnNotificationScalarWhereWithAggregatesInput>;

  @Field(() => [UserSenderOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<UserSenderOnNotificationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_created?: DateTimeNullableWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date_updated?: DateTimeNullableWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  user?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  notification?: UuidWithAggregatesFilter;
}
