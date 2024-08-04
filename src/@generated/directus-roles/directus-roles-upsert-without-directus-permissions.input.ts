import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesUpdateWithoutDirectus_permissionsInput } from './directus-roles-update-without-directus-permissions.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_permissionsInput } from './directus-roles-create-without-directus-permissions.input';

@InputType()
export class directus_rolesUpsertWithoutDirectus_permissionsInput {
  @Field(() => directus_rolesUpdateWithoutDirectus_permissionsInput, {
    nullable: false,
  })
  @Type(() => directus_rolesUpdateWithoutDirectus_permissionsInput)
  update!: directus_rolesUpdateWithoutDirectus_permissionsInput;

  @Field(() => directus_rolesCreateWithoutDirectus_permissionsInput, {
    nullable: false,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_permissionsInput)
  create!: directus_rolesCreateWithoutDirectus_permissionsInput;
}
