import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_rolesCreateNestedOneWithoutDirectus_permissionsInput } from '../directus-roles/directus-roles-create-nested-one-without-directus-permissions.input';

@InputType()
export class directus_permissionsCreateInput {

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    permissions?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    validation?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    presets?: any;

    @Field(() => String, {nullable:true})
    fields?: string;

    @Field(() => directus_rolesCreateNestedOneWithoutDirectus_permissionsInput, {nullable:true})
    directus_roles?: directus_rolesCreateNestedOneWithoutDirectus_permissionsInput;
}
