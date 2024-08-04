import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsCreateWithoutDirectus_rolesInput } from './directus-permissions-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_permissionsCreateOrConnectWithoutDirectus_rolesInput } from './directus-permissions-create-or-connect-without-directus-roles.input';
import { directus_permissionsCreateManyDirectus_rolesInputEnvelope } from './directus-permissions-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_permissionsWhereUniqueInput } from './directus-permissions-where-unique.input';

@InputType()
export class directus_permissionsUncheckedCreateNestedManyWithoutDirectus_rolesInput {
  @Field(() => [directus_permissionsCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_permissionsCreateWithoutDirectus_rolesInput)
  create?: Array<directus_permissionsCreateWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_permissionsCreateOrConnectWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_permissionsCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_permissionsCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(() => directus_permissionsCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_permissionsCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_permissionsCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_permissionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_permissionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>>;
}
