import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterScheduleInput } from './master-profile-create-without-master-schedule.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterScheduleInput } from './master-profile-create-or-connect-without-master-schedule.input';
import { MasterProfileUpsertWithoutMasterScheduleInput } from './master-profile-upsert-without-master-schedule.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { MasterProfileUpdateWithoutMasterScheduleInput } from './master-profile-update-without-master-schedule.input';

@InputType()
export class MasterProfileUpdateOneRequiredWithoutMasterScheduleNestedInput {

    @Field(() => MasterProfileCreateWithoutMasterScheduleInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutMasterScheduleInput)
    create?: MasterProfileCreateWithoutMasterScheduleInput;

    @Field(() => MasterProfileCreateOrConnectWithoutMasterScheduleInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutMasterScheduleInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutMasterScheduleInput;

    @Field(() => MasterProfileUpsertWithoutMasterScheduleInput, {nullable:true})
    @Type(() => MasterProfileUpsertWithoutMasterScheduleInput)
    upsert?: MasterProfileUpsertWithoutMasterScheduleInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileUpdateWithoutMasterScheduleInput, {nullable:true})
    @Type(() => MasterProfileUpdateWithoutMasterScheduleInput)
    update?: MasterProfileUpdateWithoutMasterScheduleInput;
}
