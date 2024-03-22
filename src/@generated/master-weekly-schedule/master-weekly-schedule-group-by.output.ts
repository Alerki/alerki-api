import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterWeeklyScheduleCountAggregate } from './master-weekly-schedule-count-aggregate.output';
import { MasterWeeklyScheduleAvgAggregate } from './master-weekly-schedule-avg-aggregate.output';
import { MasterWeeklyScheduleSumAggregate } from './master-weekly-schedule-sum-aggregate.output';
import { MasterWeeklyScheduleMinAggregate } from './master-weekly-schedule-min-aggregate.output';
import { MasterWeeklyScheduleMaxAggregate } from './master-weekly-schedule-max-aggregate.output';

@ObjectType()
export class MasterWeeklyScheduleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => Boolean, {nullable:true})
    monday?: boolean;

    @Field(() => Boolean, {nullable:false})
    tuesday!: boolean;

    @Field(() => Boolean, {nullable:false})
    wednesday!: boolean;

    @Field(() => Boolean, {nullable:false})
    thursday!: boolean;

    @Field(() => Boolean, {nullable:false})
    friday!: boolean;

    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;

    @Field(() => Boolean, {nullable:true})
    sunday?: boolean;

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
