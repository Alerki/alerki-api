import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_relationsCountAggregate } from './directus-relations-count-aggregate.output';
import { Directus_relationsAvgAggregate } from './directus-relations-avg-aggregate.output';
import { Directus_relationsSumAggregate } from './directus-relations-sum-aggregate.output';
import { Directus_relationsMinAggregate } from './directus-relations-min-aggregate.output';
import { Directus_relationsMaxAggregate } from './directus-relations-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_relations {
  @Field(() => Directus_relationsCountAggregate, { nullable: true })
  _count?: Directus_relationsCountAggregate;

  @Field(() => Directus_relationsAvgAggregate, { nullable: true })
  _avg?: Directus_relationsAvgAggregate;

  @Field(() => Directus_relationsSumAggregate, { nullable: true })
  _sum?: Directus_relationsSumAggregate;

  @Field(() => Directus_relationsMinAggregate, { nullable: true })
  _min?: Directus_relationsMinAggregate;

  @Field(() => Directus_relationsMaxAggregate, { nullable: true })
  _max?: Directus_relationsMaxAggregate;
}
