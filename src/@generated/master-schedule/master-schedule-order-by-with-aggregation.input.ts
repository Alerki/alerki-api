import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterScheduleCountOrderByAggregateInput } from './master-schedule-count-order-by-aggregate.input';
import { MasterScheduleMaxOrderByAggregateInput } from './master-schedule-max-order-by-aggregate.input';
import { MasterScheduleMinOrderByAggregateInput } from './master-schedule-min-order-by-aggregate.input';

@InputType()
export class MasterScheduleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  startTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  endTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dayOff?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterProfile?: keyof typeof SortOrder;

  @Field(() => MasterScheduleCountOrderByAggregateInput, { nullable: true })
  _count?: MasterScheduleCountOrderByAggregateInput;

  @Field(() => MasterScheduleMaxOrderByAggregateInput, { nullable: true })
  _max?: MasterScheduleMaxOrderByAggregateInput;

  @Field(() => MasterScheduleMinOrderByAggregateInput, { nullable: true })
  _min?: MasterScheduleMinOrderByAggregateInput;
}
