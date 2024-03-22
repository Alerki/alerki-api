import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateNestedOneWithoutMasterScheduleInput } from '../master-profile/master-profile-create-nested-one-without-master-schedule.input';

@InputType()
export class MasterScheduleCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    dayOff?: boolean;

    @Field(() => MasterProfileCreateNestedOneWithoutMasterScheduleInput, {nullable:false})
    MasterProfile!: MasterProfileCreateNestedOneWithoutMasterScheduleInput;
}
