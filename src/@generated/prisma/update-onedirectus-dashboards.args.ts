import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsUpdateInput } from '../directus-dashboards/directus-dashboards-update.input';
import { Type } from 'class-transformer';
import { directus_dashboardsWhereUniqueInput } from '../directus-dashboards/directus-dashboards-where-unique.input';

@ArgsType()
export class UpdateOnedirectusDashboardsArgs {
  @Field(() => directus_dashboardsUpdateInput, { nullable: false })
  @Type(() => directus_dashboardsUpdateInput)
  data!: directus_dashboardsUpdateInput;

  @Field(() => directus_dashboardsWhereUniqueInput, { nullable: false })
  @Type(() => directus_dashboardsWhereUniqueInput)
  where!: directus_dashboardsWhereUniqueInput;
}
