import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_versionsCountAggregate } from './directus-versions-count-aggregate.output';
import { Directus_versionsMinAggregate } from './directus-versions-min-aggregate.output';
import { Directus_versionsMaxAggregate } from './directus-versions-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_versions {
  @Field(() => Directus_versionsCountAggregate, { nullable: true })
  _count?: Directus_versionsCountAggregate;

  @Field(() => Directus_versionsMinAggregate, { nullable: true })
  _min?: Directus_versionsMinAggregate;

  @Field(() => Directus_versionsMaxAggregate, { nullable: true })
  _max?: Directus_versionsMaxAggregate;
}
