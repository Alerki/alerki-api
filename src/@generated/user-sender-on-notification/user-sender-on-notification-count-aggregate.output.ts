import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSenderOnNotificationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    date_updated!: number;

    @Field(() => Int, {nullable:false})
    user!: number;

    @Field(() => Int, {nullable:false})
    notification!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
