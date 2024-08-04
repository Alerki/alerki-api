import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsCreateWithoutDirectus_rolesInput } from './directus-permissions-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_permissionsCreateOrConnectWithoutDirectus_rolesInput } from './directus-permissions-create-or-connect-without-directus-roles.input';
import { directus_permissionsUpsertWithWhereUniqueWithoutDirectus_rolesInput } from './directus-permissions-upsert-with-where-unique-without-directus-roles.input';
import { directus_permissionsCreateManyDirectus_rolesInputEnvelope } from './directus-permissions-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_permissionsWhereUniqueInput } from './directus-permissions-where-unique.input';
import { directus_permissionsUpdateWithWhereUniqueWithoutDirectus_rolesInput } from './directus-permissions-update-with-where-unique-without-directus-roles.input';
import { directus_permissionsUpdateManyWithWhereWithoutDirectus_rolesInput } from './directus-permissions-update-many-with-where-without-directus-roles.input';
import { directus_permissionsScalarWhereInput } from './directus-permissions-scalar-where.input';

@InputType()
export class directus_permissionsUncheckedUpdateManyWithoutDirectus_rolesNestedInput {
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

  @Field(
    () => [directus_permissionsUpsertWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(
    () => directus_permissionsUpsertWithWhereUniqueWithoutDirectus_rolesInput,
  )
  upsert?: Array<directus_permissionsUpsertWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => directus_permissionsCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_permissionsCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_permissionsCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_permissionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_permissionsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_permissionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_permissionsWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>
  >;

  @Field(() => [directus_permissionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_permissionsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_permissionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_permissionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_permissionsWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_permissionsUpdateWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(
    () => directus_permissionsUpdateWithWhereUniqueWithoutDirectus_rolesInput,
  )
  update?: Array<directus_permissionsUpdateWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_permissionsUpdateManyWithWhereWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_permissionsUpdateManyWithWhereWithoutDirectus_rolesInput)
  updateMany?: Array<directus_permissionsUpdateManyWithWhereWithoutDirectus_rolesInput>;

  @Field(() => [directus_permissionsScalarWhereInput], { nullable: true })
  @Type(() => directus_permissionsScalarWhereInput)
  deleteMany?: Array<directus_permissionsScalarWhereInput>;
}
