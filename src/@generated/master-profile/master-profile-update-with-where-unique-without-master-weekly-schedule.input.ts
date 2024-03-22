import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileUpdateWithoutMasterWeeklyScheduleInput } from './master-profile-update-without-master-weekly-schedule.input';

@InputType()
export class MasterProfileUpdateWithWhereUniqueWithoutMasterWeeklyScheduleInput {

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileUpdateWithoutMasterWeeklyScheduleInput, {nullable:false})
    @Type(() => MasterProfileUpdateWithoutMasterWeeklyScheduleInput)
    data!: MasterProfileUpdateWithoutMasterWeeklyScheduleInput;
}
