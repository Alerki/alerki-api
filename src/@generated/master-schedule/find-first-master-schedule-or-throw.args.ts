import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleWhereInput } from './master-schedule-where.input';
import { Type } from 'class-transformer';
import { MasterScheduleOrderByWithRelationAndSearchRelevanceInput } from './master-schedule-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterScheduleWhereUniqueInput } from './master-schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterScheduleScalarFieldEnum } from './master-schedule-scalar-field.enum';

@ArgsType()
export class FindFirstMasterScheduleOrThrowArgs {

    @Field(() => MasterScheduleWhereInput, {nullable:true})
    @Type(() => MasterScheduleWhereInput)
    where?: MasterScheduleWhereInput;

    @Field(() => [MasterScheduleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MasterScheduleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MasterScheduleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MasterScheduleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MasterScheduleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MasterScheduleScalarFieldEnum>;
}
