import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesUpdateManyMutationInput } from '../directus-roles/directus-roles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_rolesWhereInput } from '../directus-roles/directus-roles-where.input';

@ArgsType()
export class UpdateManydirectusRolesArgs {
  @Field(() => directus_rolesUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_rolesUpdateManyMutationInput)
  data!: directus_rolesUpdateManyMutationInput;

  @Field(() => directus_rolesWhereInput, { nullable: true })
  @Type(() => directus_rolesWhereInput)
  where?: directus_rolesWhereInput;
}
