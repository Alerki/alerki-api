import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_rolesCount {

    @Field(() => Int, {nullable:false})
    directus_permissions!: number;

    @Field(() => Int, {nullable:false})
    directus_presets!: number;

    @Field(() => Int, {nullable:false})
    directus_shares!: number;

    @Field(() => Int, {nullable:false})
    directus_users!: number;
}
