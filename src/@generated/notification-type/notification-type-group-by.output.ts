import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationTypeCountAggregate } from './notification-type-count-aggregate.output';
import { NotificationTypeAvgAggregate } from './notification-type-avg-aggregate.output';
import { NotificationTypeSumAggregate } from './notification-type-sum-aggregate.output';
import { NotificationTypeMinAggregate } from './notification-type-min-aggregate.output';
import { NotificationTypeMaxAggregate } from './notification-type-max-aggregate.output';

@ObjectType()
export class NotificationTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_updated?: string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => NotificationTypeCountAggregate, {nullable:true})
    _count?: NotificationTypeCountAggregate;

    @Field(() => NotificationTypeAvgAggregate, {nullable:true})
    _avg?: NotificationTypeAvgAggregate;

    @Field(() => NotificationTypeSumAggregate, {nullable:true})
    _sum?: NotificationTypeSumAggregate;

    @Field(() => NotificationTypeMinAggregate, {nullable:true})
    _min?: NotificationTypeMinAggregate;

    @Field(() => NotificationTypeMaxAggregate, {nullable:true})
    _max?: NotificationTypeMaxAggregate;
}
