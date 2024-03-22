import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesUpdateInput } from '../directus-roles/directus-roles-update.input';
import { Type } from 'class-transformer';
import { directus_rolesWhereUniqueInput } from '../directus-roles/directus-roles-where-unique.input';

@ArgsType()
export class UpdateOnedirectusRolesArgs {

    @Field(() => directus_rolesUpdateInput, {nullable:false})
    @Type(() => directus_rolesUpdateInput)
    data!: directus_rolesUpdateInput;

    @Field(() => directus_rolesWhereUniqueInput, {nullable:false})
    @Type(() => directus_rolesWhereUniqueInput)
    where!: directus_rolesWhereUniqueInput;
}
