import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_extensionsCountAggregate {

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    folder!: number;

    @Field(() => Int, {nullable:false})
    source!: number;

    @Field(() => Int, {nullable:false})
    bundle!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
