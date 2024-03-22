import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterWeeklyScheduleInput } from './master-profile-create-without-master-weekly-schedule.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput } from './master-profile-create-or-connect-without-master-weekly-schedule.input';
import { MasterProfileUpsertWithWhereUniqueWithoutMasterWeeklyScheduleInput } from './master-profile-upsert-with-where-unique-without-master-weekly-schedule.input';
import { MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope } from './master-profile-create-many-master-weekly-schedule-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { MasterProfileUpdateWithWhereUniqueWithoutMasterWeeklyScheduleInput } from './master-profile-update-with-where-unique-without-master-weekly-schedule.input';
import { MasterProfileUpdateManyWithWhereWithoutMasterWeeklyScheduleInput } from './master-profile-update-many-with-where-without-master-weekly-schedule.input';
import { MasterProfileScalarWhereInput } from './master-profile-scalar-where.input';

@InputType()
export class MasterProfileUncheckedUpdateManyWithoutMasterWeeklyScheduleNestedInput {

    @Field(() => [MasterProfileCreateWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileCreateWithoutMasterWeeklyScheduleInput)
    create?: Array<MasterProfileCreateWithoutMasterWeeklyScheduleInput>;

    @Field(() => [MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput)
    connectOrCreate?: Array<MasterProfileCreateOrConnectWithoutMasterWeeklyScheduleInput>;

    @Field(() => [MasterProfileUpsertWithWhereUniqueWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileUpsertWithWhereUniqueWithoutMasterWeeklyScheduleInput)
    upsert?: Array<MasterProfileUpsertWithWhereUniqueWithoutMasterWeeklyScheduleInput>;

    @Field(() => MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope, {nullable:true})
    @Type(() => MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope)
    createMany?: MasterProfileCreateManyMasterWeeklyScheduleInputEnvelope;

    @Field(() => [MasterProfileWhereUniqueInput], {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>>;

    @Field(() => [MasterProfileWhereUniqueInput], {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>>;

    @Field(() => [MasterProfileWhereUniqueInput], {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>>;

    @Field(() => [MasterProfileWhereUniqueInput], {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>>;

    @Field(() => [MasterProfileUpdateWithWhereUniqueWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileUpdateWithWhereUniqueWithoutMasterWeeklyScheduleInput)
    update?: Array<MasterProfileUpdateWithWhereUniqueWithoutMasterWeeklyScheduleInput>;

    @Field(() => [MasterProfileUpdateManyWithWhereWithoutMasterWeeklyScheduleInput], {nullable:true})
    @Type(() => MasterProfileUpdateManyWithWhereWithoutMasterWeeklyScheduleInput)
    updateMany?: Array<MasterProfileUpdateManyWithWhereWithoutMasterWeeklyScheduleInput>;

    @Field(() => [MasterProfileScalarWhereInput], {nullable:true})
    @Type(() => MasterProfileScalarWhereInput)
    deleteMany?: Array<MasterProfileScalarWhereInput>;
}
