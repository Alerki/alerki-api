import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_fieldsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    collection!: number;

    @Field(() => Int, {nullable:false})
    field!: number;

    @Field(() => Int, {nullable:false})
    special!: number;

    @Field(() => Int, {nullable:false})
    interface!: number;

    @Field(() => Int, {nullable:false})
    options!: number;

    @Field(() => Int, {nullable:false})
    display!: number;

    @Field(() => Int, {nullable:false})
    display_options!: number;

    @Field(() => Int, {nullable:false})
    readonly!: number;

    @Field(() => Int, {nullable:false})
    hidden!: number;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;

    @Field(() => Int, {nullable:false})
    note!: number;

    @Field(() => Int, {nullable:false})
    conditions!: number;

    @Field(() => Int, {nullable:false})
    required!: number;

    @Field(() => Int, {nullable:false})
    group!: number;

    @Field(() => Int, {nullable:false})
    validation!: number;

    @Field(() => Int, {nullable:false})
    validation_message!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
