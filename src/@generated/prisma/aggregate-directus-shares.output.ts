import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_sharesCountAggregate } from './directus-shares-count-aggregate.output';
import { Directus_sharesAvgAggregate } from './directus-shares-avg-aggregate.output';
import { Directus_sharesSumAggregate } from './directus-shares-sum-aggregate.output';
import { Directus_sharesMinAggregate } from './directus-shares-min-aggregate.output';
import { Directus_sharesMaxAggregate } from './directus-shares-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_shares {
  @Field(() => Directus_sharesCountAggregate, { nullable: true })
  _count?: Directus_sharesCountAggregate;

  @Field(() => Directus_sharesAvgAggregate, { nullable: true })
  _avg?: Directus_sharesAvgAggregate;

  @Field(() => Directus_sharesSumAggregate, { nullable: true })
  _sum?: Directus_sharesSumAggregate;

  @Field(() => Directus_sharesMinAggregate, { nullable: true })
  _min?: Directus_sharesMinAggregate;

  @Field(() => Directus_sharesMaxAggregate, { nullable: true })
  _max?: Directus_sharesMaxAggregate;
}
