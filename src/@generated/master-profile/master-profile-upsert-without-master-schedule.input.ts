import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileUpdateWithoutMasterScheduleInput } from './master-profile-update-without-master-schedule.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutMasterScheduleInput } from './master-profile-create-without-master-schedule.input';

@InputType()
export class MasterProfileUpsertWithoutMasterScheduleInput {

    @Field(() => MasterProfileUpdateWithoutMasterScheduleInput, {nullable:false})
    @Type(() => MasterProfileUpdateWithoutMasterScheduleInput)
    update!: MasterProfileUpdateWithoutMasterScheduleInput;

    @Field(() => MasterProfileCreateWithoutMasterScheduleInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutMasterScheduleInput)
    create!: MasterProfileCreateWithoutMasterScheduleInput;
}
