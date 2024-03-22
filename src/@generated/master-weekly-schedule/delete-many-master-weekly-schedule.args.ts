import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMasterWeeklyScheduleArgs {

    @Field(() => MasterWeeklyScheduleWhereInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleWhereInput)
    where?: MasterWeeklyScheduleWhereInput;
}
