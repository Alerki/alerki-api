import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsUncheckedCreateNestedManyWithoutDirectus_rolesInput } from '../directus-permissions/directus-permissions-unchecked-create-nested-many-without-directus-roles.input';
import { directus_presetsUncheckedCreateNestedManyWithoutDirectus_rolesInput } from '../directus-presets/directus-presets-unchecked-create-nested-many-without-directus-roles.input';
import { directus_sharesUncheckedCreateNestedManyWithoutDirectus_rolesInput } from '../directus-shares/directus-shares-unchecked-create-nested-many-without-directus-roles.input';

@InputType()
export class directus_rolesUncheckedCreateWithoutDirectus_usersInput {
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

  @Field(
    () =>
      directus_permissionsUncheckedCreateNestedManyWithoutDirectus_rolesInput,
    { nullable: true },
  )
  directus_permissions?: directus_permissionsUncheckedCreateNestedManyWithoutDirectus_rolesInput;

  @Field(
    () => directus_presetsUncheckedCreateNestedManyWithoutDirectus_rolesInput,
    { nullable: true },
  )
  directus_presets?: directus_presetsUncheckedCreateNestedManyWithoutDirectus_rolesInput;

  @Field(
    () => directus_sharesUncheckedCreateNestedManyWithoutDirectus_rolesInput,
    { nullable: true },
  )
  directus_shares?: directus_sharesUncheckedCreateNestedManyWithoutDirectus_rolesInput;
}
