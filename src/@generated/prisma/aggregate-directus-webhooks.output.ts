import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_webhooksCountAggregate } from './directus-webhooks-count-aggregate.output';
import { Directus_webhooksAvgAggregate } from './directus-webhooks-avg-aggregate.output';
import { Directus_webhooksSumAggregate } from './directus-webhooks-sum-aggregate.output';
import { Directus_webhooksMinAggregate } from './directus-webhooks-min-aggregate.output';
import { Directus_webhooksMaxAggregate } from './directus-webhooks-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_webhooks {
  @Field(() => Directus_webhooksCountAggregate, { nullable: true })
  _count?: Directus_webhooksCountAggregate;

  @Field(() => Directus_webhooksAvgAggregate, { nullable: true })
  _avg?: Directus_webhooksAvgAggregate;

  @Field(() => Directus_webhooksSumAggregate, { nullable: true })
  _sum?: Directus_webhooksSumAggregate;

  @Field(() => Directus_webhooksMinAggregate, { nullable: true })
  _min?: Directus_webhooksMinAggregate;

  @Field(() => Directus_webhooksMaxAggregate, { nullable: true })
  _max?: Directus_webhooksMaxAggregate;
}
