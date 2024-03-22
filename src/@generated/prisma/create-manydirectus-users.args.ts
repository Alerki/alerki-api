import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersCreateManyInput } from '../directus-users/directus-users-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusUsersArgs {

    @Field(() => [directus_usersCreateManyInput], {nullable:false})
    @Type(() => directus_usersCreateManyInput)
    data!: Array<directus_usersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
