import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationOrderByWithAggregationInput } from './user-recipient-on-notification-order-by-with-aggregation.input';
import { UserRecipientOnNotificationScalarFieldEnum } from './user-recipient-on-notification-scalar-field.enum';
import { UserRecipientOnNotificationScalarWhereWithAggregatesInput } from './user-recipient-on-notification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRecipientOnNotificationCountAggregateInput } from './user-recipient-on-notification-count-aggregate.input';
import { UserRecipientOnNotificationMinAggregateInput } from './user-recipient-on-notification-min-aggregate.input';
import { UserRecipientOnNotificationMaxAggregateInput } from './user-recipient-on-notification-max-aggregate.input';

@ArgsType()
export class UserRecipientOnNotificationGroupByArgs {
  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  @Type(() => UserRecipientOnNotificationWhereInput)
  where?: UserRecipientOnNotificationWhereInput;

  @Field(() => [UserRecipientOnNotificationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<UserRecipientOnNotificationOrderByWithAggregationInput>;

  @Field(() => [UserRecipientOnNotificationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<keyof typeof UserRecipientOnNotificationScalarFieldEnum>;

  @Field(() => UserRecipientOnNotificationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: UserRecipientOnNotificationScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserRecipientOnNotificationCountAggregateInput, {
    nullable: true,
  })
  _count?: UserRecipientOnNotificationCountAggregateInput;

  @Field(() => UserRecipientOnNotificationMinAggregateInput, { nullable: true })
  _min?: UserRecipientOnNotificationMinAggregateInput;

  @Field(() => UserRecipientOnNotificationMaxAggregateInput, { nullable: true })
  _max?: UserRecipientOnNotificationMaxAggregateInput;
}
