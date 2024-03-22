import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesWhereUniqueInput } from '../directus-roles/directus-roles-where-unique.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateInput } from '../directus-roles/directus-roles-create.input';
import { directus_rolesUpdateInput } from '../directus-roles/directus-roles-update.input';

@ArgsType()
export class UpsertOnedirectusRolesArgs {

    @Field(() => directus_rolesWhereUniqueInput, {nullable:false})
    @Type(() => directus_rolesWhereUniqueInput)
    where!: directus_rolesWhereUniqueInput;

    @Field(() => directus_rolesCreateInput, {nullable:false})
    @Type(() => directus_rolesCreateInput)
    create!: directus_rolesCreateInput;

    @Field(() => directus_rolesUpdateInput, {nullable:false})
    @Type(() => directus_rolesUpdateInput)
    update!: directus_rolesUpdateInput;
}
