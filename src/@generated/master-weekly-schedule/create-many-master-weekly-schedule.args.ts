import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleCreateManyInput } from './master-weekly-schedule-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMasterWeeklyScheduleArgs {

    @Field(() => [MasterWeeklyScheduleCreateManyInput], {nullable:false})
    @Type(() => MasterWeeklyScheduleCreateManyInput)
    data!: Array<MasterWeeklyScheduleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
