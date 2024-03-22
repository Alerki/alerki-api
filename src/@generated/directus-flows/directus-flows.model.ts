import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_users } from '../directus-users/directus-users.model';
import { directus_operations } from '../directus-operations/directus-operations.model';
import { Directus_flowsCount } from '../prisma/directus-flows-count.output';

@ObjectType()
export class directus_flows {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'active'})
    status!: string;

    @Field(() => String, {nullable:true})
    trigger!: string | null;

    @Field(() => String, {nullable:true,defaultValue:'all'})
    accountability!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    options!: any | null;

    @Field(() => String, {nullable:true})
    operation!: string | null;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => String, {nullable:true})
    user_created!: string | null;

    @Field(() => directus_users, {nullable:true})
    directus_users?: directus_users | null;

    @Field(() => [directus_operations], {nullable:true})
    directus_operations?: Array<directus_operations>;

    @Field(() => Directus_flowsCount, {nullable:false})
    _count?: Directus_flowsCount;
}
