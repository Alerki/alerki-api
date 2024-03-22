import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_sharesMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    collection?: string;

    @Field(() => String, {nullable:true})
    item?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_start?: Date | string;

    @Field(() => Date, {nullable:true})
    date_end?: Date | string;

    @Field(() => Int, {nullable:true})
    times_used?: number;

    @Field(() => Int, {nullable:true})
    max_uses?: number;
}
