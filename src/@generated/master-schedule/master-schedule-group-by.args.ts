import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleWhereInput } from './master-schedule-where.input';
import { Type } from 'class-transformer';
import { MasterScheduleOrderByWithAggregationInput } from './master-schedule-order-by-with-aggregation.input';
import { MasterScheduleScalarFieldEnum } from './master-schedule-scalar-field.enum';
import { MasterScheduleScalarWhereWithAggregatesInput } from './master-schedule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MasterScheduleCountAggregateInput } from './master-schedule-count-aggregate.input';
import { MasterScheduleMinAggregateInput } from './master-schedule-min-aggregate.input';
import { MasterScheduleMaxAggregateInput } from './master-schedule-max-aggregate.input';

@ArgsType()
export class MasterScheduleGroupByArgs {
  @Field(() => MasterScheduleWhereInput, { nullable: true })
  @Type(() => MasterScheduleWhereInput)
  where?: MasterScheduleWhereInput;

  @Field(() => [MasterScheduleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<MasterScheduleOrderByWithAggregationInput>;

  @Field(() => [MasterScheduleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MasterScheduleScalarFieldEnum>;

  @Field(() => MasterScheduleScalarWhereWithAggregatesInput, { nullable: true })
  having?: MasterScheduleScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MasterScheduleCountAggregateInput, { nullable: true })
  _count?: MasterScheduleCountAggregateInput;

  @Field(() => MasterScheduleMinAggregateInput, { nullable: true })
  _min?: MasterScheduleMinAggregateInput;

  @Field(() => MasterScheduleMaxAggregateInput, { nullable: true })
  _max?: MasterScheduleMaxAggregateInput;
}
