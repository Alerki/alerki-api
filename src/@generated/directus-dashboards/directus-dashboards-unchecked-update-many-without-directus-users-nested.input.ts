import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsCreateWithoutDirectus_usersInput } from './directus-dashboards-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateOrConnectWithoutDirectus_usersInput } from './directus-dashboards-create-or-connect-without-directus-users.input';
import { directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-dashboards-upsert-with-where-unique-without-directus-users.input';
import { directus_dashboardsCreateManyDirectus_usersInputEnvelope } from './directus-dashboards-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_dashboardsWhereUniqueInput } from './directus-dashboards-where-unique.input';
import { directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-dashboards-update-with-where-unique-without-directus-users.input';
import { directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-dashboards-update-many-with-where-without-directus-users.input';
import { directus_dashboardsScalarWhereInput } from './directus-dashboards-scalar-where.input';

@InputType()
export class directus_dashboardsUncheckedUpdateManyWithoutDirectus_usersNestedInput {
  @Field(() => [directus_dashboardsCreateWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_dashboardsCreateWithoutDirectus_usersInput)
  create?: Array<directus_dashboardsCreateWithoutDirectus_usersInput>;

  @Field(() => [directus_dashboardsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_dashboardsCreateOrConnectWithoutDirectus_usersInput)
  connectOrCreate?: Array<directus_dashboardsCreateOrConnectWithoutDirectus_usersInput>;

  @Field(
    () => [directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(
    () => directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput,
  )
  upsert?: Array<directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

  @Field(() => directus_dashboardsCreateManyDirectus_usersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_dashboardsCreateManyDirectus_usersInputEnvelope)
  createMany?: directus_dashboardsCreateManyDirectus_usersInputEnvelope;

  @Field(() => [directus_dashboardsWhereUniqueInput], { nullable: true })
  @Type(() => directus_dashboardsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_dashboardsWhereUniqueInput], { nullable: true })
  @Type(() => directus_dashboardsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_dashboardsWhereUniqueInput], { nullable: true })
  @Type(() => directus_dashboardsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_dashboardsWhereUniqueInput], { nullable: true })
  @Type(() => directus_dashboardsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(
    () => directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput,
  )
  update?: Array<directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

  @Field(
    () => [directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput],
    { nullable: true },
  )
  @Type(() => directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput)
  updateMany?: Array<directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput>;

  @Field(() => [directus_dashboardsScalarWhereInput], { nullable: true })
  @Type(() => directus_dashboardsScalarWhereInput)
  deleteMany?: Array<directus_dashboardsScalarWhereInput>;
}
