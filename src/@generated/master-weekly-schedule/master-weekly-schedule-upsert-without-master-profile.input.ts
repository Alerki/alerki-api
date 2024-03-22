import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterWeeklyScheduleUpdateWithoutMasterProfileInput } from './master-weekly-schedule-update-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleCreateWithoutMasterProfileInput } from './master-weekly-schedule-create-without-master-profile.input';

@InputType()
export class MasterWeeklyScheduleUpsertWithoutMasterProfileInput {

    @Field(() => MasterWeeklyScheduleUpdateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterWeeklyScheduleUpdateWithoutMasterProfileInput)
    update!: MasterWeeklyScheduleUpdateWithoutMasterProfileInput;

    @Field(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput)
    create!: MasterWeeklyScheduleCreateWithoutMasterProfileInput;
}
