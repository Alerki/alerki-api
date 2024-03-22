import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsScalarWhereInput } from './directus-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_permissionsUpdateManyMutationInput } from './directus-permissions-update-many-mutation.input';

@InputType()
export class directus_permissionsUpdateManyWithWhereWithoutDirectus_rolesInput {

    @Field(() => directus_permissionsScalarWhereInput, {nullable:false})
    @Type(() => directus_permissionsScalarWhereInput)
    where!: directus_permissionsScalarWhereInput;

    @Field(() => directus_permissionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_permissionsUpdateManyMutationInput)
    data!: directus_permissionsUpdateManyMutationInput;
}
