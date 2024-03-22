import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutMasterWeeklyScheduleInput } from './master-profile-create-without-master-weekly-schedule.input';

@InputType()
export class MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput {

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileCreateWithoutMasterWeeklyScheduleInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutMasterWeeklyScheduleInput)
    create!: MasterProfileCreateWithoutMasterWeeklyScheduleInput;
}
