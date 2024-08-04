import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';
import { Type } from 'class-transformer';
import { directus_dashboardsOrderByWithAggregationInput } from '../directus-dashboards/directus-dashboards-order-by-with-aggregation.input';
import { Directus_dashboardsScalarFieldEnum } from './directus-dashboards-scalar-field.enum';
import { directus_dashboardsScalarWhereWithAggregatesInput } from '../directus-dashboards/directus-dashboards-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusDashboardsArgs {
  @Field(() => directus_dashboardsWhereInput, { nullable: true })
  @Type(() => directus_dashboardsWhereInput)
  where?: directus_dashboardsWhereInput;

  @Field(() => [directus_dashboardsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_dashboardsOrderByWithAggregationInput>;

  @Field(() => [Directus_dashboardsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_dashboardsScalarFieldEnum>;

  @Field(() => directus_dashboardsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_dashboardsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
