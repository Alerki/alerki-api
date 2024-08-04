import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_rolesInput } from './directus-users-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_rolesInput } from './directus-users-create-or-connect-without-directus-roles.input';
import { directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput } from './directus-users-upsert-with-where-unique-without-directus-roles.input';
import { directus_usersCreateManyDirectus_rolesInputEnvelope } from './directus-users-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput } from './directus-users-update-with-where-unique-without-directus-roles.input';
import { directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput } from './directus-users-update-many-with-where-without-directus-roles.input';
import { directus_usersScalarWhereInput } from './directus-users-scalar-where.input';

@InputType()
export class directus_usersUpdateManyWithoutDirectus_rolesNestedInput {
  @Field(() => [directus_usersCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_rolesInput)
  create?: Array<directus_usersCreateWithoutDirectus_rolesInput>;

  @Field(() => [directus_usersCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_usersCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(
    () => [directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput)
  upsert?: Array<directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => directus_usersCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_usersCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_usersCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_usersWhereUniqueInput], { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      directus_usersWhereUniqueInput,
      'id' | 'email' | 'token' | 'external_identifier'
    >
  >;

  @Field(() => [directus_usersWhereUniqueInput], { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      directus_usersWhereUniqueInput,
      'id' | 'email' | 'token' | 'external_identifier'
    >
  >;

  @Field(() => [directus_usersWhereUniqueInput], { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      directus_usersWhereUniqueInput,
      'id' | 'email' | 'token' | 'external_identifier'
    >
  >;

  @Field(() => [directus_usersWhereUniqueInput], { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      directus_usersWhereUniqueInput,
      'id' | 'email' | 'token' | 'external_identifier'
    >
  >;

  @Field(
    () => [directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput],
    { nullable: true },
  )
  @Type(() => directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput)
  update?: Array<directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput>;

  @Field(() => [directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput)
  updateMany?: Array<directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput>;

  @Field(() => [directus_usersScalarWhereInput], { nullable: true })
  @Type(() => directus_usersScalarWhereInput)
  deleteMany?: Array<directus_usersScalarWhereInput>;
}
