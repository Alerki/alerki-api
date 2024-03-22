import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleCreateWithoutMasterProfileInput } from './master-schedule-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterScheduleCreateOrConnectWithoutMasterProfileInput } from './master-schedule-create-or-connect-without-master-profile.input';
import { MasterScheduleUpsertWithWhereUniqueWithoutMasterProfileInput } from './master-schedule-upsert-with-where-unique-without-master-profile.input';
import { MasterScheduleCreateManyMasterProfileInputEnvelope } from './master-schedule-create-many-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { MasterScheduleUpdateWithWhereUniqueWithoutMasterProfileInput } from './master-schedule-update-with-where-unique-without-master-profile.input';
import { MasterScheduleUpdateManyWithWhereWithoutMasterProfileInput } from './master-schedule-update-many-with-where-without-master-profile.input';
import { MasterScheduleScalarWhereInput } from './master-schedule-scalar-where.input';

@InputType()
export class MasterScheduleUpdateManyWithoutMasterProfileNestedInput {

    @Field(() => [MasterScheduleCreateWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleCreateWithoutMasterProfileInput)
    create?: Array<MasterScheduleCreateWithoutMasterProfileInput>;

    @Field(() => [MasterScheduleCreateOrConnectWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleCreateOrConnectWithoutMasterProfileInput)
    connectOrCreate?: Array<MasterScheduleCreateOrConnectWithoutMasterProfileInput>;

    @Field(() => [MasterScheduleUpsertWithWhereUniqueWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleUpsertWithWhereUniqueWithoutMasterProfileInput)
    upsert?: Array<MasterScheduleUpsertWithWhereUniqueWithoutMasterProfileInput>;

    @Field(() => MasterScheduleCreateManyMasterProfileInputEnvelope, {nullable:true})
    @Type(() => MasterScheduleCreateManyMasterProfileInputEnvelope)
    createMany?: MasterScheduleCreateManyMasterProfileInputEnvelope;

    @Field(() => [MasterScheduleWhereUniqueInput], {nullable:true})
    @Type(() => MasterScheduleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>>;

    @Field(() => [MasterScheduleWhereUniqueInput], {nullable:true})
    @Type(() => MasterScheduleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>>;

    @Field(() => [MasterScheduleWhereUniqueInput], {nullable:true})
    @Type(() => MasterScheduleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>>;

    @Field(() => [MasterScheduleWhereUniqueInput], {nullable:true})
    @Type(() => MasterScheduleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>>;

    @Field(() => [MasterScheduleUpdateWithWhereUniqueWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleUpdateWithWhereUniqueWithoutMasterProfileInput)
    update?: Array<MasterScheduleUpdateWithWhereUniqueWithoutMasterProfileInput>;

    @Field(() => [MasterScheduleUpdateManyWithWhereWithoutMasterProfileInput], {nullable:true})
    @Type(() => MasterScheduleUpdateManyWithWhereWithoutMasterProfileInput)
    updateMany?: Array<MasterScheduleUpdateManyWithWhereWithoutMasterProfileInput>;

    @Field(() => [MasterScheduleScalarWhereInput], {nullable:true})
    @Type(() => MasterScheduleScalarWhereInput)
    deleteMany?: Array<MasterScheduleScalarWhereInput>;
}
