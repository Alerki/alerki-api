import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { User_SessionCountOrderByAggregateInput } from './user-session-count-order-by-aggregate.input';
import { User_SessionAvgOrderByAggregateInput } from './user-session-avg-order-by-aggregate.input';
import { User_SessionMaxOrderByAggregateInput } from './user-session-max-order-by-aggregate.input';
import { User_SessionMinOrderByAggregateInput } from './user-session-min-order-by-aggregate.input';
import { User_SessionSumOrderByAggregateInput } from './user-session-sum-order-by-aggregate.input';

@InputType()
export class User_SessionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  User_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  Session_id?: keyof typeof SortOrder;

  @Field(() => User_SessionCountOrderByAggregateInput, { nullable: true })
  _count?: User_SessionCountOrderByAggregateInput;

  @Field(() => User_SessionAvgOrderByAggregateInput, { nullable: true })
  _avg?: User_SessionAvgOrderByAggregateInput;

  @Field(() => User_SessionMaxOrderByAggregateInput, { nullable: true })
  _max?: User_SessionMaxOrderByAggregateInput;

  @Field(() => User_SessionMinOrderByAggregateInput, { nullable: true })
  _min?: User_SessionMinOrderByAggregateInput;

  @Field(() => User_SessionSumOrderByAggregateInput, { nullable: true })
  _sum?: User_SessionSumOrderByAggregateInput;
}
