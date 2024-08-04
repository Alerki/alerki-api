import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsUpdateWithoutDirectus_panelsInput } from './directus-dashboards-update-without-directus-panels.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateWithoutDirectus_panelsInput } from './directus-dashboards-create-without-directus-panels.input';

@InputType()
export class directus_dashboardsUpsertWithoutDirectus_panelsInput {
  @Field(() => directus_dashboardsUpdateWithoutDirectus_panelsInput, {
    nullable: false,
  })
  @Type(() => directus_dashboardsUpdateWithoutDirectus_panelsInput)
  update!: directus_dashboardsUpdateWithoutDirectus_panelsInput;

  @Field(() => directus_dashboardsCreateWithoutDirectus_panelsInput, {
    nullable: false,
  })
  @Type(() => directus_dashboardsCreateWithoutDirectus_panelsInput)
  create!: directus_dashboardsCreateWithoutDirectus_panelsInput;
}
