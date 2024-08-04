import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MasterScheduleCountAggregate } from './master-schedule-count-aggregate.output';
import { MasterScheduleMinAggregate } from './master-schedule-min-aggregate.output';
import { MasterScheduleMaxAggregate } from './master-schedule-max-aggregate.output';

@ObjectType()
export class MasterScheduleGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  status!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => Date, { nullable: true })
  startTime?: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => Boolean, { nullable: false })
  dayOff!: boolean;

  @Field(() => String, { nullable: false })
  masterProfile!: string;

  @Field(() => MasterScheduleCountAggregate, { nullable: true })
  _count?: MasterScheduleCountAggregate;

  @Field(() => MasterScheduleMinAggregate, { nullable: true })
  _min?: MasterScheduleMinAggregate;

  @Field(() => MasterScheduleMaxAggregate, { nullable: true })
  _max?: MasterScheduleMaxAggregate;
}
