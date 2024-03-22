import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';

@InputType()
export class Directus_usersRelationFilter {

    @Field(() => directus_usersWhereInput, {nullable:true})
    is?: directus_usersWhereInput;

    @Field(() => directus_usersWhereInput, {nullable:true})
    isNot?: directus_usersWhereInput;
}
