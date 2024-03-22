import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { Type } from 'class-transformer';
import { MasterScheduleUpdateWithoutMasterProfileInput } from './master-schedule-update-without-master-profile.input';

@InputType()
export class MasterScheduleUpdateWithWhereUniqueWithoutMasterProfileInput {

    @Field(() => MasterScheduleWhereUniqueInput, {nullable:false})
    @Type(() => MasterScheduleWhereUniqueInput)
    where!: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;

    @Field(() => MasterScheduleUpdateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterScheduleUpdateWithoutMasterProfileInput)
    data!: MasterScheduleUpdateWithoutMasterProfileInput;
}
