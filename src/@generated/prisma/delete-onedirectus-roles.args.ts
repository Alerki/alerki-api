import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesWhereUniqueInput } from '../directus-roles/directus-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusRolesArgs {
  @Field(() => directus_rolesWhereUniqueInput, { nullable: false })
  @Type(() => directus_rolesWhereUniqueInput)
  where!: directus_rolesWhereUniqueInput;
}
