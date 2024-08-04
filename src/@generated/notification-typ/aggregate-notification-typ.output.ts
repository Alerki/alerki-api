import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationTypCountAggregate } from './notification-typ-count-aggregate.output';
import { NotificationTypAvgAggregate } from './notification-typ-avg-aggregate.output';
import { NotificationTypSumAggregate } from './notification-typ-sum-aggregate.output';
import { NotificationTypMinAggregate } from './notification-typ-min-aggregate.output';
import { NotificationTypMaxAggregate } from './notification-typ-max-aggregate.output';

@ObjectType()
export class AggregateNotificationTyp {
  @Field(() => NotificationTypCountAggregate, { nullable: true })
  _count?: NotificationTypCountAggregate;

  @Field(() => NotificationTypAvgAggregate, { nullable: true })
  _avg?: NotificationTypAvgAggregate;

  @Field(() => NotificationTypSumAggregate, { nullable: true })
  _sum?: NotificationTypSumAggregate;

  @Field(() => NotificationTypMinAggregate, { nullable: true })
  _min?: NotificationTypMinAggregate;

  @Field(() => NotificationTypMaxAggregate, { nullable: true })
  _max?: NotificationTypMaxAggregate;
}
