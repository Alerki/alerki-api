import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSenderOnNotificationCountAggregate } from './user-sender-on-notification-count-aggregate.output';
import { UserSenderOnNotificationMinAggregate } from './user-sender-on-notification-min-aggregate.output';
import { UserSenderOnNotificationMaxAggregate } from './user-sender-on-notification-max-aggregate.output';

@ObjectType()
export class AggregateUserSenderOnNotification {

    @Field(() => UserSenderOnNotificationCountAggregate, {nullable:true})
    _count?: UserSenderOnNotificationCountAggregate;

    @Field(() => UserSenderOnNotificationMinAggregate, {nullable:true})
    _min?: UserSenderOnNotificationMinAggregate;

    @Field(() => UserSenderOnNotificationMaxAggregate, {nullable:true})
    _max?: UserSenderOnNotificationMaxAggregate;
}
