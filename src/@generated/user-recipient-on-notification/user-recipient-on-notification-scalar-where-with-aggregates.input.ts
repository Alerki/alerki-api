import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserRecipientOnNotificationScalarWhereWithAggregatesInput {
  @Field(() => [UserRecipientOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<UserRecipientOnNotificationScalarWhereWithAggregatesInput>;

  @Field(() => [UserRecipientOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<UserRecipientOnNotificationScalarWhereWithAggregatesInput>;

  @Field(() => [UserRecipientOnNotificationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<UserRecipientOnNotificationScalarWhereWithAggregatesInput>;

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
