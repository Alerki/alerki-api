import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleCreateWithoutMasterProfileInput } from './master-schedule-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterScheduleCreateOrConnectWithoutMasterProfileInput } from './master-schedule-create-or-connect-without-master-profile.input';
import { MasterScheduleCreateManyMasterProfileInputEnvelope } from './master-schedule-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';

@InputType()
export class MasterScheduleCreateNestedManyWithoutMasterProfileInput {

    @Field(() => [MasterScheduleCreateWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleCreateWithoutMasterProfileInput)
    create?: Array<MasterScheduleCreateWithoutMasterProfileInput>;

    @Field(() => [MasterScheduleCreateOrConnectWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleCreateOrConnectWithoutMasterProfileInput)
    connectOrCreate?: Array<MasterScheduleCreateOrConnectWithoutMasterProfileInput>;

    @Field(() => MasterScheduleCreateManyMasterProfileInputEnvelope, {nullable:true})
    @Type(() => MasterScheduleCreateManyMasterProfileInputEnvelope)
    createMany?: MasterScheduleCreateManyMasterProfileInputEnvelope;

    @Field(() => [MasterScheduleWhereUniqueInput], {nullable:true})
    @Type(() => MasterScheduleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>>;
}
