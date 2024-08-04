import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_sharesCountOrderByAggregateInput } from './directus-shares-count-order-by-aggregate.input';
import { directus_sharesAvgOrderByAggregateInput } from './directus-shares-avg-order-by-aggregate.input';
import { directus_sharesMaxOrderByAggregateInput } from './directus-shares-max-order-by-aggregate.input';
import { directus_sharesMinOrderByAggregateInput } from './directus-shares-min-order-by-aggregate.input';
import { directus_sharesSumOrderByAggregateInput } from './directus-shares-sum-order-by-aggregate.input';

@InputType()
export class directus_sharesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_start?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_end?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  times_used?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  max_uses?: keyof typeof SortOrder;

  @Field(() => directus_sharesCountOrderByAggregateInput, { nullable: true })
  _count?: directus_sharesCountOrderByAggregateInput;

  @Field(() => directus_sharesAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_sharesAvgOrderByAggregateInput;

  @Field(() => directus_sharesMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_sharesMaxOrderByAggregateInput;

  @Field(() => directus_sharesMinOrderByAggregateInput, { nullable: true })
  _min?: directus_sharesMinOrderByAggregateInput;

  @Field(() => directus_sharesSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_sharesSumOrderByAggregateInput;
}
