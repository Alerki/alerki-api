import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_operationsCreateNestedManyWithoutDirectus_flowsInput } from '../directus-operations/directus-operations-create-nested-many-without-directus-flows.input';

@InputType()
export class directus_flowsCreateWithoutDirectus_usersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    trigger?: string;

    @Field(() => String, {nullable:true})
    accountability?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => String, {nullable:true})
    operation?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => directus_operationsCreateNestedManyWithoutDirectus_flowsInput, {nullable:true})
    directus_operations?: directus_operationsCreateNestedManyWithoutDirectus_flowsInput;
}
