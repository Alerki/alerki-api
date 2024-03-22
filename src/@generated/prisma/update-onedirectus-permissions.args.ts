import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsUpdateInput } from '../directus-permissions/directus-permissions-update.input';
import { Type } from 'class-transformer';
import { directus_permissionsWhereUniqueInput } from '../directus-permissions/directus-permissions-where-unique.input';

@ArgsType()
export class UpdateOnedirectusPermissionsArgs {

    @Field(() => directus_permissionsUpdateInput, {nullable:false})
    @Type(() => directus_permissionsUpdateInput)
    data!: directus_permissionsUpdateInput;

    @Field(() => directus_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_permissionsWhereUniqueInput)
    where!: directus_permissionsWhereUniqueInput;
}
