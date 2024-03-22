import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';

@InputType()
export class Directus_usersListRelationFilter {

    @Field(() => directus_usersWhereInput, {nullable:true})
    every?: directus_usersWhereInput;

    @Field(() => directus_usersWhereInput, {nullable:true})
    some?: directus_usersWhereInput;

    @Field(() => directus_usersWhereInput, {nullable:true})
    none?: directus_usersWhereInput;
}
