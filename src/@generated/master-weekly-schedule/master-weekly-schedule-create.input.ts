import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterProfileCreateNestedManyWithoutMasterWeeklyScheduleInput } from '../master-profile/master-profile-create-nested-many-without-master-weekly-schedule.input';

@InputType()
export class MasterWeeklyScheduleCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => Boolean, {nullable:true})
    monday?: boolean;

    @Field(() => Boolean, {nullable:true})
    tuesday?: boolean;

    @Field(() => Boolean, {nullable:true})
    wednesday?: boolean;

    @Field(() => Boolean, {nullable:true})
    thursday?: boolean;

    @Field(() => Boolean, {nullable:true})
    friday?: boolean;

    @Field(() => Boolean, {nullable:true})
    saturday?: boolean;

    @Field(() => Boolean, {nullable:true})
    sunday?: boolean;

    @Field(() => MasterProfileCreateNestedManyWithoutMasterWeeklyScheduleInput, {nullable:true})
    MasterProfile?: MasterProfileCreateNestedManyWithoutMasterWeeklyScheduleInput;
}
