import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput } from './user-recipient-on-notification-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRecipientOnNotificationCountAggregateInput } from './user-recipient-on-notification-count-aggregate.input';
import { UserRecipientOnNotificationMinAggregateInput } from './user-recipient-on-notification-min-aggregate.input';
import { UserRecipientOnNotificationMaxAggregateInput } from './user-recipient-on-notification-max-aggregate.input';

@ArgsType()
export class UserRecipientOnNotificationAggregateArgs {

    @Field(() => UserRecipientOnNotificationWhereInput, {nullable:true})
    @Type(() => UserRecipientOnNotificationWhereInput)
    where?: UserRecipientOnNotificationWhereInput;

    @Field(() => [UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => UserRecipientOnNotificationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRecipientOnNotificationCountAggregateInput, {nullable:true})
    _count?: UserRecipientOnNotificationCountAggregateInput;

    @Field(() => UserRecipientOnNotificationMinAggregateInput, {nullable:true})
    _min?: UserRecipientOnNotificationMinAggregateInput;

    @Field(() => UserRecipientOnNotificationMaxAggregateInput, {nullable:true})
    _max?: UserRecipientOnNotificationMaxAggregateInput;
}
