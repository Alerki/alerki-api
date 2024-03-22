import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_operationsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Int, {nullable:true})
    position_x?: number;

    @Field(() => Int, {nullable:true})
    position_y?: number;

    @Field(() => String, {nullable:true})
    resolve?: string;

    @Field(() => String, {nullable:true})
    reject?: string;

    @Field(() => String, {nullable:true})
    flow?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_created?: string;
}
