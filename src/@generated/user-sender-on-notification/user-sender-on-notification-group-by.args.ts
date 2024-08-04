import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationWhereInput } from './user-sender-on-notification-where.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationOrderByWithAggregationInput } from './user-sender-on-notification-order-by-with-aggregation.input';
import { UserSenderOnNotificationScalarFieldEnum } from './user-sender-on-notification-scalar-field.enum';
import { UserSenderOnNotificationScalarWhereWithAggregatesInput } from './user-sender-on-notification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserSenderOnNotificationCountAggregateInput } from './user-sender-on-notification-count-aggregate.input';
import { UserSenderOnNotificationMinAggregateInput } from './user-sender-on-notification-min-aggregate.input';
import { UserSenderOnNotificationMaxAggregateInput } from './user-sender-on-notification-max-aggregate.input';

@ArgsType()
export class UserSenderOnNotificationGroupByArgs {
  @Field(() => UserSenderOnNotificationWhereInput, { nullable: true })
  @Type(() => UserSenderOnNotificationWhereInput)
  where?: UserSenderOnNotificationWhereInput;

  @Field(() => [UserSenderOnNotificationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<UserSenderOnNotificationOrderByWithAggregationInput>;

  @Field(() => [UserSenderOnNotificationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserSenderOnNotificationScalarFieldEnum>;

  @Field(() => UserSenderOnNotificationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: UserSenderOnNotificationScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserSenderOnNotificationCountAggregateInput, { nullable: true })
  _count?: UserSenderOnNotificationCountAggregateInput;

  @Field(() => UserSenderOnNotificationMinAggregateInput, { nullable: true })
  _min?: UserSenderOnNotificationMinAggregateInput;

  @Field(() => UserSenderOnNotificationMaxAggregateInput, { nullable: true })
  _max?: UserSenderOnNotificationMaxAggregateInput;
}
