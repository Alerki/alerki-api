import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterServiceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    date_updated!: number;

    @Field(() => Int, {nullable:false})
    masterProfile!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    service!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
