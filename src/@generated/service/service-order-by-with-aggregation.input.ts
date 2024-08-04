import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceCountOrderByAggregateInput } from './service-count-order-by-aggregate.input';
import { ServiceAvgOrderByAggregateInput } from './service-avg-order-by-aggregate.input';
import { ServiceMaxOrderByAggregateInput } from './service-max-order-by-aggregate.input';
import { ServiceMinOrderByAggregateInput } from './service-min-order-by-aggregate.input';
import { ServiceSumOrderByAggregateInput } from './service-sum-order-by-aggregate.input';

@InputType()
export class ServiceOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => ServiceCountOrderByAggregateInput, { nullable: true })
  _count?: ServiceCountOrderByAggregateInput;

  @Field(() => ServiceAvgOrderByAggregateInput, { nullable: true })
  _avg?: ServiceAvgOrderByAggregateInput;

  @Field(() => ServiceMaxOrderByAggregateInput, { nullable: true })
  _max?: ServiceMaxOrderByAggregateInput;

  @Field(() => ServiceMinOrderByAggregateInput, { nullable: true })
  _min?: ServiceMinOrderByAggregateInput;

  @Field(() => ServiceSumOrderByAggregateInput, { nullable: true })
  _sum?: ServiceSumOrderByAggregateInput;
}
