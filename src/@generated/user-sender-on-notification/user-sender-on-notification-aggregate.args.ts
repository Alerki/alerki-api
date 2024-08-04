import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSenderOnNotificationWhereInput } from './user-sender-on-notification-where.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationOrderByWithRelationAndSearchRelevanceInput } from './user-sender-on-notification-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserSenderOnNotificationCountAggregateInput } from './user-sender-on-notification-count-aggregate.input';
import { UserSenderOnNotificationMinAggregateInput } from './user-sender-on-notification-min-aggregate.input';
import { UserSenderOnNotificationMaxAggregateInput } from './user-sender-on-notification-max-aggregate.input';

@ArgsType()
export class UserSenderOnNotificationAggregateArgs {
  @Field(() => UserSenderOnNotificationWhereInput, { nullable: true })
  @Type(() => UserSenderOnNotificationWhereInput)
  where?: UserSenderOnNotificationWhereInput;

  @Field(
    () => [UserSenderOnNotificationOrderByWithRelationAndSearchRelevanceInput],
    { nullable: true },
  )
  orderBy?: Array<UserSenderOnNotificationOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserSenderOnNotificationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;

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
