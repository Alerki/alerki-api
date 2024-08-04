import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_dashboardsWhereUniqueInput } from './directus-dashboards-where-unique.input';
import { Type } from 'class-transformer';
import { directus_dashboardsUpdateWithoutDirectus_usersInput } from './directus-dashboards-update-without-directus-users.input';

@InputType()
export class directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput {
  @Field(() => directus_dashboardsWhereUniqueInput, { nullable: false })
  @Type(() => directus_dashboardsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>;

  @Field(() => directus_dashboardsUpdateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_dashboardsUpdateWithoutDirectus_usersInput)
  data!: directus_dashboardsUpdateWithoutDirectus_usersInput;
}
