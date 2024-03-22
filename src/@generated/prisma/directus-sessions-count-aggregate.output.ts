import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_sessionsCountAggregate {

    @Field(() => Int, {nullable:false})
    token!: number;

    @Field(() => Int, {nullable:false})
    user!: number;

    @Field(() => Int, {nullable:false})
    expires!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    user_agent!: number;

    @Field(() => Int, {nullable:false})
    share!: number;

    @Field(() => Int, {nullable:false})
    origin!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
