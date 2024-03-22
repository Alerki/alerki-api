import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { Type } from 'class-transformer';
import { MasterScheduleCreateWithoutMasterProfileInput } from './master-schedule-create-without-master-profile.input';

@InputType()
export class MasterScheduleCreateOrConnectWithoutMasterProfileInput {

    @Field(() => MasterScheduleWhereUniqueInput, {nullable:false})
    @Type(() => MasterScheduleWhereUniqueInput)
    where!: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;

    @Field(() => MasterScheduleCreateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterScheduleCreateWithoutMasterProfileInput)
    create!: MasterScheduleCreateWithoutMasterProfileInput;
}
