import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput } from './master-weekly-schedule-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterWeeklyScheduleScalarFieldEnum } from './master-weekly-schedule-scalar-field.enum';

@ArgsType()
export class FindFirstMasterWeeklyScheduleArgs {

    @Field(() => MasterWeeklyScheduleWhereInput, {nullable:true})
    @Type(() => MasterWeeklyScheduleWhereInput)
    where?: MasterWeeklyScheduleWhereInput;

    @Field(() => [MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MasterWeeklyScheduleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MasterWeeklyScheduleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MasterWeeklyScheduleScalarFieldEnum>;
}
