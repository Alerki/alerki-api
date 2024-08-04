import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_dashboardsCountAggregate } from './directus-dashboards-count-aggregate.output';
import { Directus_dashboardsMinAggregate } from './directus-dashboards-min-aggregate.output';
import { Directus_dashboardsMaxAggregate } from './directus-dashboards-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_dashboards {
  @Field(() => Directus_dashboardsCountAggregate, { nullable: true })
  _count?: Directus_dashboardsCountAggregate;

  @Field(() => Directus_dashboardsMinAggregate, { nullable: true })
  _min?: Directus_dashboardsMinAggregate;

  @Field(() => Directus_dashboardsMaxAggregate, { nullable: true })
  _max?: Directus_dashboardsMaxAggregate;
}
