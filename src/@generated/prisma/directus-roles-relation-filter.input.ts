import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesWhereInput } from '../directus-roles/directus-roles-where.input';

@InputType()
export class Directus_rolesRelationFilter {

    @Field(() => directus_rolesWhereInput, {nullable:true})
    is?: directus_rolesWhereInput;

    @Field(() => directus_rolesWhereInput, {nullable:true})
    isNot?: directus_rolesWhereInput;
}
