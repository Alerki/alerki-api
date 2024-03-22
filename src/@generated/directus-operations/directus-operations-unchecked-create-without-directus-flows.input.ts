import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput } from './directus-operations-unchecked-create-nested-one-without-directus-operations-directus-operations-reject-todirectus-operations.input';
import { directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-unchecked-create-nested-one-without-directus-operations-directus-operations-resolve-todirectus-operations.input';

@InputType()
export class directus_operationsUncheckedCreateWithoutDirectus_flowsInput {

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

    @Field(() => directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput, {nullable:true})
    other_directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput;

    @Field(() => directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:true})
    other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsUncheckedCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;
}
