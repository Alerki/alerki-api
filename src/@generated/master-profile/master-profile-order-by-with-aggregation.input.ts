import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterProfileCountOrderByAggregateInput } from './master-profile-count-order-by-aggregate.input';
import { MasterProfileMaxOrderByAggregateInput } from './master-profile-max-order-by-aggregate.input';
import { MasterProfileMinOrderByAggregateInput } from './master-profile-min-order-by-aggregate.input';

@InputType()
export class MasterProfileOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterWeeklySchedule?: keyof typeof SortOrder;

  @Field(() => MasterProfileCountOrderByAggregateInput, { nullable: true })
  _count?: MasterProfileCountOrderByAggregateInput;

  @Field(() => MasterProfileMaxOrderByAggregateInput, { nullable: true })
  _max?: MasterProfileMaxOrderByAggregateInput;

  @Field(() => MasterProfileMinOrderByAggregateInput, { nullable: true })
  _min?: MasterProfileMinOrderByAggregateInput;
}
