import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterWeeklyScheduleCreateWithoutMasterProfileInput } from './master-weekly-schedule-create-without-master-profile.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput } from './master-weekly-schedule-create-or-connect-without-master-profile.input';
import { MasterWeeklyScheduleUpsertWithoutMasterProfileInput } from './master-weekly-schedule-upsert-without-master-profile.input';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { MasterWeeklyScheduleUpdateWithoutMasterProfileInput } from './master-weekly-schedule-update-without-master-profile.input';

@InputType()
export class MasterWeeklyScheduleUpdateOneRequiredWithoutMasterProfileNestedInput {

    @Field(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleCreateWithoutMasterProfileInput)
    create?: MasterWeeklyScheduleCreateWithoutMasterProfileInput;

    @Field(() => MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput)
    connectOrCreate?: MasterWeeklyScheduleCreateOrConnectWithoutMasterProfileInput;

    @Field(() => MasterWeeklyScheduleUpsertWithoutMasterProfileInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleUpsertWithoutMasterProfileInput)
    upsert?: MasterWeeklyScheduleUpsertWithoutMasterProfileInput;

    @Field(() => MasterWeeklyScheduleWhereUniqueInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;

    @Field(() => MasterWeeklyScheduleUpdateWithoutMasterProfileInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleUpdateWithoutMasterProfileInput)
    update?: MasterWeeklyScheduleUpdateWithoutMasterProfileInput;
}
