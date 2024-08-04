import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesWhereInput } from '../directus-roles/directus-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusRolesArgs {
  @Field(() => directus_rolesWhereInput, { nullable: true })
  @Type(() => directus_rolesWhereInput)
  where?: directus_rolesWhereInput;
}
