import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesCreateWithoutDirectus_permissionsInput } from './directus-roles-create-without-directus-permissions.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateOrConnectWithoutDirectus_permissionsInput } from './directus-roles-create-or-connect-without-directus-permissions.input';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';

@InputType()
export class directus_rolesCreateNestedOneWithoutDirectus_permissionsInput {
  @Field(() => directus_rolesCreateWithoutDirectus_permissionsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_permissionsInput)
  create?: directus_rolesCreateWithoutDirectus_permissionsInput;

  @Field(() => directus_rolesCreateOrConnectWithoutDirectus_permissionsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateOrConnectWithoutDirectus_permissionsInput)
  connectOrCreate?: directus_rolesCreateOrConnectWithoutDirectus_permissionsInput;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  @Type(() => directus_rolesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;
}
