import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MasterWeeklyScheduleCountAggregate } from './master-weekly-schedule-count-aggregate.output';
import { MasterWeeklyScheduleAvgAggregate } from './master-weekly-schedule-avg-aggregate.output';
import { MasterWeeklyScheduleSumAggregate } from './master-weekly-schedule-sum-aggregate.output';
import { MasterWeeklyScheduleMinAggregate } from './master-weekly-schedule-min-aggregate.output';
import { MasterWeeklyScheduleMaxAggregate } from './master-weekly-schedule-max-aggregate.output';

@ObjectType()
export class AggregateMasterWeeklySchedule {

    @Field(() => MasterWeeklyScheduleCountAggregate, {nullable:true})
    _count?: MasterWeeklyScheduleCountAggregate;

    @Field(() => MasterWeeklyScheduleAvgAggregate, {nullable:true})
    _avg?: MasterWeeklyScheduleAvgAggregate;

    @Field(() => MasterWeeklyScheduleSumAggregate, {nullable:true})
    _sum?: MasterWeeklyScheduleSumAggregate;

    @Field(() => MasterWeeklyScheduleMinAggregate, {nullable:true})
    _min?: MasterWeeklyScheduleMinAggregate;

    @Field(() => MasterWeeklyScheduleMaxAggregate, {nullable:true})
    _max?: MasterWeeklyScheduleMaxAggregate;
}
