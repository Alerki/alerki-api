import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_activityCountOrderByAggregateInput } from './directus-activity-count-order-by-aggregate.input';
import { directus_activityAvgOrderByAggregateInput } from './directus-activity-avg-order-by-aggregate.input';
import { directus_activityMaxOrderByAggregateInput } from './directus-activity-max-order-by-aggregate.input';
import { directus_activityMinOrderByAggregateInput } from './directus-activity-min-order-by-aggregate.input';
import { directus_activitySumOrderByAggregateInput } from './directus-activity-sum-order-by-aggregate.input';

@InputType()
export class directus_activityOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  timestamp?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ip?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_agent?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  comment?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  origin?: keyof typeof SortOrder;

  @Field(() => directus_activityCountOrderByAggregateInput, { nullable: true })
  _count?: directus_activityCountOrderByAggregateInput;

  @Field(() => directus_activityAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_activityAvgOrderByAggregateInput;

  @Field(() => directus_activityMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_activityMaxOrderByAggregateInput;

  @Field(() => directus_activityMinOrderByAggregateInput, { nullable: true })
  _min?: directus_activityMinOrderByAggregateInput;

  @Field(() => directus_activitySumOrderByAggregateInput, { nullable: true })
  _sum?: directus_activitySumOrderByAggregateInput;
}
