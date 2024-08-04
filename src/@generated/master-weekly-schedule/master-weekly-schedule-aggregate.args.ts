import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput } from './master-weekly-schedule-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterWeeklyScheduleWhereUniqueInput } from './master-weekly-schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterWeeklyScheduleCountAggregateInput } from './master-weekly-schedule-count-aggregate.input';
import { MasterWeeklyScheduleAvgAggregateInput } from './master-weekly-schedule-avg-aggregate.input';
import { MasterWeeklyScheduleSumAggregateInput } from './master-weekly-schedule-sum-aggregate.input';
import { MasterWeeklyScheduleMinAggregateInput } from './master-weekly-schedule-min-aggregate.input';
import { MasterWeeklyScheduleMaxAggregateInput } from './master-weekly-schedule-max-aggregate.input';

@ArgsType()
export class MasterWeeklyScheduleAggregateArgs {
  @Field(() => MasterWeeklyScheduleWhereInput, { nullable: true })
  @Type(() => MasterWeeklyScheduleWhereInput)
  where?: MasterWeeklyScheduleWhereInput;

  @Field(
    () => [MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput],
    { nullable: true },
  )
  orderBy?: Array<MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MasterWeeklyScheduleWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<MasterWeeklyScheduleWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MasterWeeklyScheduleCountAggregateInput, { nullable: true })
  _count?: MasterWeeklyScheduleCountAggregateInput;

  @Field(() => MasterWeeklyScheduleAvgAggregateInput, { nullable: true })
  _avg?: MasterWeeklyScheduleAvgAggregateInput;

  @Field(() => MasterWeeklyScheduleSumAggregateInput, { nullable: true })
  _sum?: MasterWeeklyScheduleSumAggregateInput;

  @Field(() => MasterWeeklyScheduleMinAggregateInput, { nullable: true })
  _min?: MasterWeeklyScheduleMinAggregateInput;

  @Field(() => MasterWeeklyScheduleMaxAggregateInput, { nullable: true })
  _max?: MasterWeeklyScheduleMaxAggregateInput;
}
