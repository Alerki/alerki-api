import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_panelsCountOrderByAggregateInput } from './directus-panels-count-order-by-aggregate.input';
import { directus_panelsAvgOrderByAggregateInput } from './directus-panels-avg-order-by-aggregate.input';
import { directus_panelsMaxOrderByAggregateInput } from './directus-panels-max-order-by-aggregate.input';
import { directus_panelsMinOrderByAggregateInput } from './directus-panels-min-order-by-aggregate.input';
import { directus_panelsSumOrderByAggregateInput } from './directus-panels-sum-order-by-aggregate.input';

@InputType()
export class directus_panelsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dashboard?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  show_header?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  note?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_y?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  width?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  height?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => directus_panelsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_panelsCountOrderByAggregateInput;

  @Field(() => directus_panelsAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_panelsAvgOrderByAggregateInput;

  @Field(() => directus_panelsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_panelsMaxOrderByAggregateInput;

  @Field(() => directus_panelsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_panelsMinOrderByAggregateInput;

  @Field(() => directus_panelsSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_panelsSumOrderByAggregateInput;
}
