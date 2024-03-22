import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';

@InputType()
export class MasterWeeklyScheduleRelationFilter {

    @Field(() => MasterWeeklyScheduleWhereInput, {nullable:true})
    is?: MasterWeeklyScheduleWhereInput;

    @Field(() => MasterWeeklyScheduleWhereInput, {nullable:true})
    isNot?: MasterWeeklyScheduleWhereInput;
}
