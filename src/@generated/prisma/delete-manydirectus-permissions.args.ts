import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsWhereInput } from '../directus-permissions/directus-permissions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusPermissionsArgs {
  @Field(() => directus_permissionsWhereInput, { nullable: true })
  @Type(() => directus_permissionsWhereInput)
  where?: directus_permissionsWhereInput;
}
