import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { directus_roles } from '../directus-roles/directus-roles.model';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class directus_presets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    bookmark!: string | null;

    @Field(() => String, {nullable:true})
    user!: string | null;

    @Field(() => String, {nullable:true})
    role!: string | null;

    @Field(() => String, {nullable:true})
    collection!: string | null;

    @Field(() => String, {nullable:true})
    search!: string | null;

    @Field(() => String, {nullable:true,defaultValue:'tabular'})
    layout!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    layout_query!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    layout_options!: any | null;

    @Field(() => Int, {nullable:true})
    refresh_interval!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    filter!: any | null;

    @Field(() => String, {nullable:true,defaultValue:'bookmark'})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => directus_roles, {nullable:true})
    directus_roles?: directus_roles | null;

    @Field(() => directus_users, {nullable:true})
    directus_users?: directus_users | null;
}
