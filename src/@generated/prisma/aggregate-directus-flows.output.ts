import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_flowsCountAggregate } from './directus-flows-count-aggregate.output';
import { Directus_flowsMinAggregate } from './directus-flows-min-aggregate.output';
import { Directus_flowsMaxAggregate } from './directus-flows-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_flows {
  @Field(() => Directus_flowsCountAggregate, { nullable: true })
  _count?: Directus_flowsCountAggregate;

  @Field(() => Directus_flowsMinAggregate, { nullable: true })
  _min?: Directus_flowsMinAggregate;

  @Field(() => Directus_flowsMaxAggregate, { nullable: true })
  _max?: Directus_flowsMaxAggregate;
}
