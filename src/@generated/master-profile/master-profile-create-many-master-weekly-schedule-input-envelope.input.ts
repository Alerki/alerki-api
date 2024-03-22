import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateManyMasterWeeklyScheduleInput } from './master-profile-create-many-master-weekly-schedule.input';
import { Type } from 'class-transformer';

@InputType()
export class MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope {

    @Field(() => [MasterProfileCreateManyMasterWeeklyScheduleInput], {nullable:false})
    @Type(() => MasterProfileCreateManyMasterWeeklyScheduleInput)
    data!: Array<MasterProfileCreateManyMasterWeeklyScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
