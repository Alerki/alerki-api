import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_permissionsWhereUniqueInput } from './directus-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_permissionsUpdateWithoutDirectus_rolesInput } from './directus-permissions-update-without-directus-roles.input';
import { directus_permissionsCreateWithoutDirectus_rolesInput } from './directus-permissions-create-without-directus-roles.input';

@InputType()
export class directus_permissionsUpsertWithWhereUniqueWithoutDirectus_rolesInput {
  @Field(() => directus_permissionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_permissionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>;

  @Field(() => directus_permissionsUpdateWithoutDirectus_rolesInput, {
    nullable: false,
  })
  @Type(() => directus_permissionsUpdateWithoutDirectus_rolesInput)
  update!: directus_permissionsUpdateWithoutDirectus_rolesInput;

  @Field(() => directus_permissionsCreateWithoutDirectus_rolesInput, {
    nullable: false,
  })
  @Type(() => directus_permissionsCreateWithoutDirectus_rolesInput)
  create!: directus_permissionsCreateWithoutDirectus_rolesInput;
}
