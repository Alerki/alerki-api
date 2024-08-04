import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsCreateNestedManyWithoutDirectus_rolesInput } from '../directus-permissions/directus-permissions-create-nested-many-without-directus-roles.input';
import { directus_sharesCreateNestedManyWithoutDirectus_rolesInput } from '../directus-shares/directus-shares-create-nested-many-without-directus-roles.input';
import { directus_usersCreateNestedManyWithoutDirectus_rolesInput } from '../directus-users/directus-users-create-nested-many-without-directus-roles.input';

@InputType()
export class directus_rolesCreateWithoutDirectus_presetsInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  ip_access?: string;

  @Field(() => Boolean, { nullable: true })
  enforce_tfa?: boolean;

  @Field(() => Boolean, { nullable: true })
  admin_access?: boolean;

  @Field(() => Boolean, { nullable: true })
  app_access?: boolean;

  @Field(() => directus_permissionsCreateNestedManyWithoutDirectus_rolesInput, {
    nullable: true,
  })
  directus_permissions?: directus_permissionsCreateNestedManyWithoutDirectus_rolesInput;

  @Field(() => directus_sharesCreateNestedManyWithoutDirectus_rolesInput, {
    nullable: true,
  })
  directus_shares?: directus_sharesCreateNestedManyWithoutDirectus_rolesInput;

  @Field(() => directus_usersCreateNestedManyWithoutDirectus_rolesInput, {
    nullable: true,
  })
  directus_users?: directus_usersCreateNestedManyWithoutDirectus_rolesInput;
}
