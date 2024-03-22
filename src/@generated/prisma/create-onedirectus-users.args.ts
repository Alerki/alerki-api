import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersCreateInput } from '../directus-users/directus-users-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusUsersArgs {

    @Field(() => directus_usersCreateInput, {nullable:false})
    @Type(() => directus_usersCreateInput)
    data!: directus_usersCreateInput;
}
