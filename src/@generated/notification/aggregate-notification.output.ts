import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class AggregateNotification {

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
