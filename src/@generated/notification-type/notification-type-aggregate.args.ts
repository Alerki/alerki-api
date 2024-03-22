import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { Type } from 'class-transformer';
import { NotificationTypeOrderByWithRelationAndSearchRelevanceInput } from './notification-type-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypeCountAggregateInput } from './notification-type-count-aggregate.input';
import { NotificationTypeAvgAggregateInput } from './notification-type-avg-aggregate.input';
import { NotificationTypeSumAggregateInput } from './notification-type-sum-aggregate.input';
import { NotificationTypeMinAggregateInput } from './notification-type-min-aggregate.input';
import { NotificationTypeMaxAggregateInput } from './notification-type-max-aggregate.input';

@ArgsType()
export class NotificationTypeAggregateArgs {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;

    @Field(() => [NotificationTypeOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<NotificationTypeOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationTypeCountAggregateInput, {nullable:true})
    _count?: NotificationTypeCountAggregateInput;

    @Field(() => NotificationTypeAvgAggregateInput, {nullable:true})
    _avg?: NotificationTypeAvgAggregateInput;

    @Field(() => NotificationTypeSumAggregateInput, {nullable:true})
    _sum?: NotificationTypeSumAggregateInput;

    @Field(() => NotificationTypeMinAggregateInput, {nullable:true})
    _min?: NotificationTypeMinAggregateInput;

    @Field(() => NotificationTypeMaxAggregateInput, {nullable:true})
    _max?: NotificationTypeMaxAggregateInput;
}
