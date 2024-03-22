import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_operationsCreateManyDirectus_flowsInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Int, {nullable:false})
    position_x!: number;

    @Field(() => Int, {nullable:false})
    position_y!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => String, {nullable:true})
    resolve?: string;

    @Field(() => String, {nullable:true})
    reject?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_created?: string;
}
