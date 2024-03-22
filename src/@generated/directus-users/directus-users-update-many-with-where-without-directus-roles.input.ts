import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersScalarWhereInput } from './directus-users-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_usersUpdateManyMutationInput } from './directus-users-update-many-mutation.input';

@InputType()
export class directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput {

    @Field(() => directus_usersScalarWhereInput, {nullable:false})
    @Type(() => directus_usersScalarWhereInput)
    where!: directus_usersScalarWhereInput;

    @Field(() => directus_usersUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_usersUpdateManyMutationInput)
    data!: directus_usersUpdateManyMutationInput;
}
