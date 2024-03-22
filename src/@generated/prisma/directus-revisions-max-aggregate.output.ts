import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_revisionsMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    activity?: number;

    @Field(() => String, {nullable:true})
    collection?: string;

    @Field(() => String, {nullable:true})
    item?: string;

    @Field(() => Int, {nullable:true})
    parent?: number;

    @Field(() => String, {nullable:true})
    version?: string;
}
