import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsWhereUniqueInput } from '../directus-dashboards/directus-dashboards-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusDashboardsArgs {
  @Field(() => directus_dashboardsWhereUniqueInput, { nullable: false })
  @Type(() => directus_dashboardsWhereUniqueInput)
  where!: directus_dashboardsWhereUniqueInput;
}
