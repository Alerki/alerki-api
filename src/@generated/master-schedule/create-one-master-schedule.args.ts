import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleCreateInput } from './master-schedule-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMasterScheduleArgs {

    @Field(() => MasterScheduleCreateInput, {nullable:false})
    @Type(() => MasterScheduleCreateInput)
    data!: MasterScheduleCreateInput;
}
