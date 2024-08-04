import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterWeeklyScheduleWhereInput } from './master-weekly-schedule-where.input';
import { Type } from 'class-transformer';
import { MasterWeeklyScheduleOrderByWithAggregationInput } from './master-weekly-schedule-order-by-with-aggregation.input';
import { MasterWeeklyScheduleScalarFieldEnum } from './master-weekly-schedule-scalar-field.enum';
import { MasterWeeklyScheduleScalarWhereWithAggregatesInput } from './master-weekly-schedule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MasterWeeklyScheduleCountAggregateInput } from './master-weekly-schedule-count-aggregate.input';
import { MasterWeeklyScheduleAvgAggregateInput } from './master-weekly-schedule-avg-aggregate.input';
import { MasterWeeklyScheduleSumAggregateInput } from './master-weekly-schedule-sum-aggregate.input';
import { MasterWeeklyScheduleMinAggregateInput } from './master-weekly-schedule-min-aggregate.input';
import { MasterWeeklyScheduleMaxAggregateInput } from './master-weekly-schedule-max-aggregate.input';

@ArgsType()
export class MasterWeeklyScheduleGroupByArgs {
  @Field(() => MasterWeeklyScheduleWhereInput, { nullable: true })
  @Type(() => MasterWeeklyScheduleWhereInput)
  where?: MasterWeeklyScheduleWhereInput;

  @Field(() => [MasterWeeklyScheduleOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<MasterWeeklyScheduleOrderByWithAggregationInput>;

  @Field(() => [MasterWeeklyScheduleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MasterWeeklyScheduleScalarFieldEnum>;

  @Field(() => MasterWeeklyScheduleScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MasterWeeklyScheduleScalarWhereWithAggregatesInput;

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
