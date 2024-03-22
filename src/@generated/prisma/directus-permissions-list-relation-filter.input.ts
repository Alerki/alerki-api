import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsWhereInput } from '../directus-permissions/directus-permissions-where.input';

@InputType()
export class Directus_permissionsListRelationFilter {

    @Field(() => directus_permissionsWhereInput, {nullable:true})
    every?: directus_permissionsWhereInput;

    @Field(() => directus_permissionsWhereInput, {nullable:true})
    some?: directus_permissionsWhereInput;

    @Field(() => directus_permissionsWhereInput, {nullable:true})
    none?: directus_permissionsWhereInput;
}
