import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterWeeklyScheduleCountOrderByAggregateInput } from './master-weekly-schedule-count-order-by-aggregate.input';
import { MasterWeeklyScheduleAvgOrderByAggregateInput } from './master-weekly-schedule-avg-order-by-aggregate.input';
import { MasterWeeklyScheduleMaxOrderByAggregateInput } from './master-weekly-schedule-max-order-by-aggregate.input';
import { MasterWeeklyScheduleMinOrderByAggregateInput } from './master-weekly-schedule-min-order-by-aggregate.input';
import { MasterWeeklyScheduleSumOrderByAggregateInput } from './master-weekly-schedule-sum-order-by-aggregate.input';

@InputType()
export class MasterWeeklyScheduleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    monday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tuesday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wednesday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thursday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    friday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    saturday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sunday?: keyof typeof SortOrder;

    @Field(() => MasterWeeklyScheduleCountOrderByAggregateInput, {nullable:true})
    _count?: MasterWeeklyScheduleCountOrderByAggregateInput;

    @Field(() => MasterWeeklyScheduleAvgOrderByAggregateInput, {nullable:true})
    _avg?: MasterWeeklyScheduleAvgOrderByAggregateInput;

    @Field(() => MasterWeeklyScheduleMaxOrderByAggregateInput, {nullable:true})
    _max?: MasterWeeklyScheduleMaxOrderByAggregateInput;

    @Field(() => MasterWeeklyScheduleMinOrderByAggregateInput, {nullable:true})
    _min?: MasterWeeklyScheduleMinOrderByAggregateInput;

    @Field(() => MasterWeeklyScheduleSumOrderByAggregateInput, {nullable:true})
    _sum?: MasterWeeklyScheduleSumOrderByAggregateInput;
}
