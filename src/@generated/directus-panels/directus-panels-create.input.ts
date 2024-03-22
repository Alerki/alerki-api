import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_dashboardsCreateNestedOneWithoutDirectus_panelsInput } from '../directus-dashboards/directus-dashboards-create-nested-one-without-directus-panels.input';
import { directus_usersCreateNestedOneWithoutDirectus_panelsInput } from '../directus-users/directus-users-create-nested-one-without-directus-panels.input';

@InputType()
export class directus_panelsCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Boolean, {nullable:true})
    show_header?: boolean;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Int, {nullable:false})
    position_x!: number;

    @Field(() => Int, {nullable:false})
    position_y!: number;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => directus_dashboardsCreateNestedOneWithoutDirectus_panelsInput, {nullable:false})
    directus_dashboards!: directus_dashboardsCreateNestedOneWithoutDirectus_panelsInput;

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_panelsInput, {nullable:true})
    directus_users?: directus_usersCreateNestedOneWithoutDirectus_panelsInput;
}
