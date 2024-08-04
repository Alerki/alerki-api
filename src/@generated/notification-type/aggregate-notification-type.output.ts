import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationTypeCountAggregate } from './notification-type-count-aggregate.output';
import { NotificationTypeMinAggregate } from './notification-type-min-aggregate.output';
import { NotificationTypeMaxAggregate } from './notification-type-max-aggregate.output';

@ObjectType()
export class AggregateNotificationType {
  @Field(() => NotificationTypeCountAggregate, { nullable: true })
  _count?: NotificationTypeCountAggregate;

  @Field(() => NotificationTypeMinAggregate, { nullable: true })
  _min?: NotificationTypeMinAggregate;

  @Field(() => NotificationTypeMaxAggregate, { nullable: true })
  _max?: NotificationTypeMaxAggregate;
}
