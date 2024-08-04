import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationTypeCountAggregate } from './notification-type-count-aggregate.output';
import { NotificationTypeMinAggregate } from './notification-type-min-aggregate.output';
import { NotificationTypeMaxAggregate } from './notification-type-max-aggregate.output';

@ObjectType()
export class NotificationTypeGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => NotificationTypeCountAggregate, { nullable: true })
  _count?: NotificationTypeCountAggregate;

  @Field(() => NotificationTypeMinAggregate, { nullable: true })
  _min?: NotificationTypeMinAggregate;

  @Field(() => NotificationTypeMaxAggregate, { nullable: true })
  _max?: NotificationTypeMaxAggregate;
}
