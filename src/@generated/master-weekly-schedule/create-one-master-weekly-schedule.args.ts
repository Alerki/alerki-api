import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleCreateInput } from './master-weekly-schedule-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMasterWeeklyScheduleArgs {

    @Field(() => MasterWeeklyScheduleCreateInput, {nullable:false})
    @Type(() => MasterWeeklyScheduleCreateInput)
    data!: MasterWeeklyScheduleCreateInput;
}
