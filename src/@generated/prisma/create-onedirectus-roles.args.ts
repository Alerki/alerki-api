import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesCreateInput } from '../directus-roles/directus-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusRolesArgs {
  @Field(() => directus_rolesCreateInput, { nullable: false })
  @Type(() => directus_rolesCreateInput)
  data!: directus_rolesCreateInput;
}
