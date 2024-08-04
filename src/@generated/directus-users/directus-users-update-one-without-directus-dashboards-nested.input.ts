import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_dashboardsInput } from './directus-users-create-without-directus-dashboards.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_dashboardsInput } from './directus-users-create-or-connect-without-directus-dashboards.input';
import { directus_usersUpsertWithoutDirectus_dashboardsInput } from './directus-users-upsert-without-directus-dashboards.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutDirectus_dashboardsInput } from './directus-users-update-without-directus-dashboards.input';

@InputType()
export class directus_usersUpdateOneWithoutDirectus_dashboardsNestedInput {
  @Field(() => directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_dashboardsInput)
  create?: directus_usersCreateWithoutDirectus_dashboardsInput;

  @Field(() => directus_usersCreateOrConnectWithoutDirectus_dashboardsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_dashboardsInput)
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_dashboardsInput;

  @Field(() => directus_usersUpsertWithoutDirectus_dashboardsInput, {
    nullable: true,
  })
  @Type(() => directus_usersUpsertWithoutDirectus_dashboardsInput)
  upsert?: directus_usersUpsertWithoutDirectus_dashboardsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(() => directus_usersUpdateWithoutDirectus_dashboardsInput, {
    nullable: true,
  })
  @Type(() => directus_usersUpdateWithoutDirectus_dashboardsInput)
  update?: directus_usersUpdateWithoutDirectus_dashboardsInput;
}
