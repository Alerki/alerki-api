import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_fieldsMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    collection?: string;

    @Field(() => String, {nullable:true})
    field?: string;

    @Field(() => String, {nullable:true})
    special?: string;

    @Field(() => String, {nullable:true})
    interface?: string;

    @Field(() => String, {nullable:true})
    display?: string;

    @Field(() => Boolean, {nullable:true})
    readonly?: boolean;

    @Field(() => Boolean, {nullable:true})
    hidden?: boolean;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    width?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Boolean, {nullable:true})
    required?: boolean;

    @Field(() => String, {nullable:true})
    group?: string;

    @Field(() => String, {nullable:true})
    validation_message?: string;
}
