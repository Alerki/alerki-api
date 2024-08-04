import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsWhereUniqueInput } from '../directus-permissions/directus-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_permissionsCreateInput } from '../directus-permissions/directus-permissions-create.input';
import { directus_permissionsUpdateInput } from '../directus-permissions/directus-permissions-update.input';

@ArgsType()
export class UpsertOnedirectusPermissionsArgs {
  @Field(() => directus_permissionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_permissionsWhereUniqueInput)
  where!: directus_permissionsWhereUniqueInput;

  @Field(() => directus_permissionsCreateInput, { nullable: false })
  @Type(() => directus_permissionsCreateInput)
  create!: directus_permissionsCreateInput;

  @Field(() => directus_permissionsUpdateInput, { nullable: false })
  @Type(() => directus_permissionsUpdateInput)
  update!: directus_permissionsUpdateInput;
}
