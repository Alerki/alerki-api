import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_dashboardsWhereUniqueInput } from './directus-dashboards-where-unique.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateWithoutDirectus_usersInput } from './directus-dashboards-create-without-directus-users.input';

@InputType()
export class directus_dashboardsCreateOrConnectWithoutDirectus_usersInput {
  @Field(() => directus_dashboardsWhereUniqueInput, { nullable: false })
  @Type(() => directus_dashboardsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>;

  @Field(() => directus_dashboardsCreateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_dashboardsCreateWithoutDirectus_usersInput)
  create!: directus_dashboardsCreateWithoutDirectus_usersInput;
}
