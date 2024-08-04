import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_notificationsCountAggregate } from './directus-notifications-count-aggregate.output';
import { Directus_notificationsAvgAggregate } from './directus-notifications-avg-aggregate.output';
import { Directus_notificationsSumAggregate } from './directus-notifications-sum-aggregate.output';
import { Directus_notificationsMinAggregate } from './directus-notifications-min-aggregate.output';
import { Directus_notificationsMaxAggregate } from './directus-notifications-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_notifications {
  @Field(() => Directus_notificationsCountAggregate, { nullable: true })
  _count?: Directus_notificationsCountAggregate;

  @Field(() => Directus_notificationsAvgAggregate, { nullable: true })
  _avg?: Directus_notificationsAvgAggregate;

  @Field(() => Directus_notificationsSumAggregate, { nullable: true })
  _sum?: Directus_notificationsSumAggregate;

  @Field(() => Directus_notificationsMinAggregate, { nullable: true })
  _min?: Directus_notificationsMinAggregate;

  @Field(() => Directus_notificationsMaxAggregate, { nullable: true })
  _max?: Directus_notificationsMaxAggregate;
}
