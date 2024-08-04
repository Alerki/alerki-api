import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';

@InputType()
export class Directus_dashboardsListRelationFilter {
  @Field(() => directus_dashboardsWhereInput, { nullable: true })
  every?: directus_dashboardsWhereInput;

  @Field(() => directus_dashboardsWhereInput, { nullable: true })
  some?: directus_dashboardsWhereInput;

  @Field(() => directus_dashboardsWhereInput, { nullable: true })
  none?: directus_dashboardsWhereInput;
}
