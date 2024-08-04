import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationCountOrderByAggregateInput } from './notification-count-order-by-aggregate.input';
import { NotificationMaxOrderByAggregateInput } from './notification-max-order-by-aggregate.input';
import { NotificationMinOrderByAggregateInput } from './notification-min-order-by-aggregate.input';

@InputType()
export class NotificationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => NotificationCountOrderByAggregateInput, { nullable: true })
  _count?: NotificationCountOrderByAggregateInput;

  @Field(() => NotificationMaxOrderByAggregateInput, { nullable: true })
  _max?: NotificationMaxOrderByAggregateInput;

  @Field(() => NotificationMinOrderByAggregateInput, { nullable: true })
  _min?: NotificationMinOrderByAggregateInput;
}
