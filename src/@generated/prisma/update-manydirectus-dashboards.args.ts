import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsUpdateManyMutationInput } from '../directus-dashboards/directus-dashboards-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';

@ArgsType()
export class UpdateManydirectusDashboardsArgs {
  @Field(() => directus_dashboardsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_dashboardsUpdateManyMutationInput)
  data!: directus_dashboardsUpdateManyMutationInput;

  @Field(() => directus_dashboardsWhereInput, { nullable: true })
  @Type(() => directus_dashboardsWhereInput)
  where?: directus_dashboardsWhereInput;
}
