import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_translationsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    language!: number;

    @Field(() => Int, {nullable:false})
    key!: number;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
