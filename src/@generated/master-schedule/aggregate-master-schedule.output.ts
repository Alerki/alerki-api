import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MasterScheduleCountAggregate } from './master-schedule-count-aggregate.output';
import { MasterScheduleMinAggregate } from './master-schedule-min-aggregate.output';
import { MasterScheduleMaxAggregate } from './master-schedule-max-aggregate.output';

@ObjectType()
export class AggregateMasterSchedule {

    @Field(() => MasterScheduleCountAggregate, {nullable:true})
    _count?: MasterScheduleCountAggregate;

    @Field(() => MasterScheduleMinAggregate, {nullable:true})
    _min?: MasterScheduleMinAggregate;

    @Field(() => MasterScheduleMaxAggregate, {nullable:true})
    _max?: MasterScheduleMaxAggregate;
}
