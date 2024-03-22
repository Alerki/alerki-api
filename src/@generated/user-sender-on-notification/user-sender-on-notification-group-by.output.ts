import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSenderOnNotificationCountAggregate } from './user-sender-on-notification-count-aggregate.output';
import { UserSenderOnNotificationMinAggregate } from './user-sender-on-notification-min-aggregate.output';
import { UserSenderOnNotificationMaxAggregate } from './user-sender-on-notification-max-aggregate.output';

@ObjectType()
export class UserSenderOnNotificationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    user!: string;

    @Field(() => String, {nullable:false})
    notification!: string;

    @Field(() => UserSenderOnNotificationCountAggregate, {nullable:true})
    _count?: UserSenderOnNotificationCountAggregate;

    @Field(() => UserSenderOnNotificationMinAggregate, {nullable:true})
    _min?: UserSenderOnNotificationMinAggregate;

    @Field(() => UserSenderOnNotificationMaxAggregate, {nullable:true})
    _max?: UserSenderOnNotificationMaxAggregate;
}
