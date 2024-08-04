import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_dashboardsInput } from './directus-users-update-without-directus-dashboards.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_dashboardsInput } from './directus-users-create-without-directus-dashboards.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_dashboardsInput {
  @Field(() => directus_usersUpdateWithoutDirectus_dashboardsInput, {
    nullable: false,
  })
  @Type(() => directus_usersUpdateWithoutDirectus_dashboardsInput)
  update!: directus_usersUpdateWithoutDirectus_dashboardsInput;

  @Field(() => directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: false,
  })
  @Type(() => directus_usersCreateWithoutDirectus_dashboardsInput)
  create!: directus_usersCreateWithoutDirectus_dashboardsInput;
}
