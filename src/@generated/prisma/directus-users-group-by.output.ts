import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_usersCountAggregate } from './directus-users-count-aggregate.output';
import { Directus_usersMinAggregate } from './directus-users-min-aggregate.output';
import { Directus_usersMaxAggregate } from './directus-users-max-aggregate.output';

@ObjectType()
export class Directus_usersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    tags?: any;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => String, {nullable:true})
    tfa_secret?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    last_access?: Date | string;

    @Field(() => String, {nullable:true})
    last_page?: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:true})
    external_identifier?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    auth_data?: any;

    @Field(() => Boolean, {nullable:true})
    email_notifications?: boolean;

    @Field(() => String, {nullable:true})
    appearance?: string;

    @Field(() => String, {nullable:true})
    theme_dark?: string;

    @Field(() => String, {nullable:true})
    theme_light?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_light_overrides?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    theme_dark_overrides?: any;

    @Field(() => Directus_usersCountAggregate, {nullable:true})
    _count?: Directus_usersCountAggregate;

    @Field(() => Directus_usersMinAggregate, {nullable:true})
    _min?: Directus_usersMinAggregate;

    @Field(() => Directus_usersMaxAggregate, {nullable:true})
    _max?: Directus_usersMaxAggregate;
}
