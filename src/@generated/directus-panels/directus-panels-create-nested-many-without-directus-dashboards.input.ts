import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateWithoutDirectus_dashboardsInput } from './directus-panels-create-without-directus-dashboards.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput } from './directus-panels-create-or-connect-without-directus-dashboards.input';
import { directus_panelsCreateManyDirectus_dashboardsInputEnvelope } from './directus-panels-create-many-directus-dashboards-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';

@InputType()
export class directus_panelsCreateNestedManyWithoutDirectus_dashboardsInput {
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

  @Field(() => directus_panelsCreateManyDirectus_dashboardsInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_panelsCreateManyDirectus_dashboardsInputEnvelope)
  createMany?: directus_panelsCreateManyDirectus_dashboardsInputEnvelope;

  @Field(() => [directus_panelsWhereUniqueInput], { nullable: true })
  @Type(() => directus_panelsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;
}
