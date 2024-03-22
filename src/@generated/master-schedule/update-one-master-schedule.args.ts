import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleUpdateInput } from './master-schedule-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';

@ArgsType()
export class UpdateOneMasterScheduleArgs {

    @Field(() => MasterScheduleUpdateInput, {nullable:false})
    @Type(() => MasterScheduleUpdateInput)
    data!: MasterScheduleUpdateInput;

    @Field(() => MasterScheduleWhereUniqueInput, {nullable:false})
    @Type(() => MasterScheduleWhereUniqueInput)
    where!: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;
}
