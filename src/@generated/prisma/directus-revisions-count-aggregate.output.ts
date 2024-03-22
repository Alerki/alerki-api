import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_revisionsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    activity!: number;

    @Field(() => Int, {nullable:false})
    collection!: number;

    @Field(() => Int, {nullable:false})
    item!: number;

    @Field(() => Int, {nullable:false})
    data!: number;

    @Field(() => Int, {nullable:false})
    delta!: number;

    @Field(() => Int, {nullable:false})
    parent!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
