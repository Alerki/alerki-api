import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterWeeklyScheduleInput } from './master-profile-create-without-master-weekly-schedule.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput } from './master-profile-create-or-connect-without-master-weekly-schedule.input';
import { MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope } from './master-profile-create-many-master-weekly-schedule-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileUncheckedCreateNestedManyWithoutMasterWeeklyScheduleInput {

    @Field(() => [MasterProfileCreateWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileCreateWithoutMasterWeeklyScheduleInput)
    create?: Array<MasterProfileCreateWithoutMasterWeeklyScheduleInput>;

    @Field(() => [MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput)
    connectOrCreate?: Array<MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput>;

    @Field(() => MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope, {nullable:true})
    @Type(() => MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope)
    createMany?: MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope;

    @Field(() => [MasterProfileWhereUniqueInput], {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>>;
}
