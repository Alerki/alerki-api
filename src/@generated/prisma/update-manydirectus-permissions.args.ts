import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsUpdateManyMutationInput } from '../directus-permissions/directus-permissions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_permissionsWhereInput } from '../directus-permissions/directus-permissions-where.input';

@ArgsType()
export class UpdateManydirectusPermissionsArgs {
  @Field(() => directus_permissionsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_permissionsUpdateManyMutationInput)
  data!: directus_permissionsUpdateManyMutationInput;

  @Field(() => directus_permissionsWhereInput, { nullable: true })
  @Type(() => directus_permissionsWhereInput)
  where?: directus_permissionsWhereInput;
}
