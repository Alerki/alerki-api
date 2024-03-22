import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_operationsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    key!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    position_x!: number;

    @Field(() => Int, {nullable:false})
    position_y!: number;

    @Field(() => Int, {nullable:false})
    options!: number;

    @Field(() => Int, {nullable:false})
    resolve!: number;

    @Field(() => Int, {nullable:false})
    reject!: number;

    @Field(() => Int, {nullable:false})
    flow!: number;

    @Field(() => Int, {nullable:false})
    date_created!: number;

    @Field(() => Int, {nullable:false})
    user_created!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
