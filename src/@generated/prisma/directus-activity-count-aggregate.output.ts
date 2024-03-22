import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_activityCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    user!: number;

    @Field(() => Int, {nullable:false})
    timestamp!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    user_agent!: number;

    @Field(() => Int, {nullable:false})
    collection!: number;

    @Field(() => Int, {nullable:false})
    item!: number;

    @Field(() => Int, {nullable:false})
    comment!: number;

    @Field(() => Int, {nullable:false})
    origin!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
