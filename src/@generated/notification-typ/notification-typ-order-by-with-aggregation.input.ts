import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationTypCountOrderByAggregateInput } from './notification-typ-count-order-by-aggregate.input';
import { NotificationTypAvgOrderByAggregateInput } from './notification-typ-avg-order-by-aggregate.input';
import { NotificationTypMaxOrderByAggregateInput } from './notification-typ-max-order-by-aggregate.input';
import { NotificationTypMinOrderByAggregateInput } from './notification-typ-min-order-by-aggregate.input';
import { NotificationTypSumOrderByAggregateInput } from './notification-typ-sum-order-by-aggregate.input';

@InputType()
export class NotificationTypOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => NotificationTypCountOrderByAggregateInput, { nullable: true })
  _count?: NotificationTypCountOrderByAggregateInput;

  @Field(() => NotificationTypAvgOrderByAggregateInput, { nullable: true })
  _avg?: NotificationTypAvgOrderByAggregateInput;

  @Field(() => NotificationTypMaxOrderByAggregateInput, { nullable: true })
  _max?: NotificationTypMaxOrderByAggregateInput;

  @Field(() => NotificationTypMinOrderByAggregateInput, { nullable: true })
  _min?: NotificationTypMinOrderByAggregateInput;

  @Field(() => NotificationTypSumOrderByAggregateInput, { nullable: true })
  _sum?: NotificationTypSumOrderByAggregateInput;
}
