import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_dashboards } from '../directus-dashboards/directus-dashboards.model';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class directus_panels {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dashboard!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    show_header!: boolean;

    @Field(() => String, {nullable:true})
    note!: string | null;

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
    options!: any | null;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => String, {nullable:true})
    user_created!: string | null;

    @Field(() => directus_dashboards, {nullable:false})
    directus_dashboards?: directus_dashboards;

    @Field(() => directus_users, {nullable:true})
    directus_users?: directus_users | null;
}
