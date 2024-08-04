import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Directus_activityCountAggregate } from './directus-activity-count-aggregate.output';
import { Directus_activityAvgAggregate } from './directus-activity-avg-aggregate.output';
import { Directus_activitySumAggregate } from './directus-activity-sum-aggregate.output';
import { Directus_activityMinAggregate } from './directus-activity-min-aggregate.output';
import { Directus_activityMaxAggregate } from './directus-activity-max-aggregate.output';

@ObjectType()
export class Directus_activityGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  action!: string;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => Date, { nullable: false })
  timestamp!: Date | string;

  @Field(() => String, { nullable: true })
  ip?: string;

  @Field(() => String, { nullable: true })
  user_agent?: string;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  comment?: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => Directus_activityCountAggregate, { nullable: true })
  _count?: Directus_activityCountAggregate;

  @Field(() => Directus_activityAvgAggregate, { nullable: true })
  _avg?: Directus_activityAvgAggregate;

  @Field(() => Directus_activitySumAggregate, { nullable: true })
  _sum?: Directus_activitySumAggregate;

  @Field(() => Directus_activityMinAggregate, { nullable: true })
  _min?: Directus_activityMinAggregate;

  @Field(() => Directus_activityMaxAggregate, { nullable: true })
  _max?: Directus_activityMaxAggregate;
}
