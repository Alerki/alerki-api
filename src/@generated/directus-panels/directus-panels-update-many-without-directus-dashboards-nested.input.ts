import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateWithoutDirectus_dashboardsInput } from './directus-panels-create-without-directus-dashboards.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput } from './directus-panels-create-or-connect-without-directus-dashboards.input';
import { directus_panelsUpsertWithWhereUniqueWithoutDirectus_dashboardsInput } from './directus-panels-upsert-with-where-unique-without-directus-dashboards.input';
import { directus_panelsCreateManyDirectus_dashboardsInputEnvelope } from './directus-panels-create-many-directus-dashboards-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';
import { directus_panelsUpdateWithWhereUniqueWithoutDirectus_dashboardsInput } from './directus-panels-update-with-where-unique-without-directus-dashboards.input';
import { directus_panelsUpdateManyWithWhereWithoutDirectus_dashboardsInput } from './directus-panels-update-many-with-where-without-directus-dashboards.input';
import { directus_panelsScalarWhereInput } from './directus-panels-scalar-where.input';

@InputType()
export class directus_panelsUpdateManyWithoutDirectus_dashboardsNestedInput {
  @Field(() => [directus_panelsCreateWithoutDirectus_dashboardsInput], {
    nullable: true,
  })
  @Type(() => directus_panelsCreateWithoutDirectus_dashboardsInput)
  create?: Array<directus_panelsCreateWithoutDirectus_dashboardsInput>;

  @Field(
    () => [directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput],
    { nullable: true },
  )
  @Type(() => directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput)
  connectOrCreate?: Array<directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput>;

  @Field(
    () => [directus_panelsUpsertWithWhereUniqueWithoutDirectus_dashboardsInput],
    { nullable: true },
  )
  @Type(
    () => directus_panelsUpsertWithWhereUniqueWithoutDirectus_dashboardsInput,
  )
  upsert?: Array<directus_panelsUpsertWithWhereUniqueWithoutDirectus_dashboardsInput>;

  @Field(() => directus_panelsCreateManyDirectus_dashboardsInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_panelsCreateManyDirectus_dashboardsInputEnvelope)
  createMany?: directus_panelsCreateManyDirectus_dashboardsInputEnvelope;

  @Field(() => [directus_panelsWhereUniqueInput], { nullable: true })
  @Type(() => directus_panelsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_panelsWhereUniqueInput], { nullable: true })
  @Type(() => directus_panelsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_panelsWhereUniqueInput], { nullable: true })
  @Type(() => directus_panelsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_panelsWhereUniqueInput], { nullable: true })
  @Type(() => directus_panelsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

  @Field(
    () => [directus_panelsUpdateWithWhereUniqueWithoutDirectus_dashboardsInput],
    { nullable: true },
  )
  @Type(
    () => directus_panelsUpdateWithWhereUniqueWithoutDirectus_dashboardsInput,
  )
  update?: Array<directus_panelsUpdateWithWhereUniqueWithoutDirectus_dashboardsInput>;

  @Field(
    () => [directus_panelsUpdateManyWithWhereWithoutDirectus_dashboardsInput],
    { nullable: true },
  )
  @Type(() => directus_panelsUpdateManyWithWhereWithoutDirectus_dashboardsInput)
  updateMany?: Array<directus_panelsUpdateManyWithWhereWithoutDirectus_dashboardsInput>;

  @Field(() => [directus_panelsScalarWhereInput], { nullable: true })
  @Type(() => directus_panelsScalarWhereInput)
  deleteMany?: Array<directus_panelsScalarWhereInput>;
}
