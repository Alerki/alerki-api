import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_presetsCountOrderByAggregateInput } from './directus-presets-count-order-by-aggregate.input';
import { directus_presetsAvgOrderByAggregateInput } from './directus-presets-avg-order-by-aggregate.input';
import { directus_presetsMaxOrderByAggregateInput } from './directus-presets-max-order-by-aggregate.input';
import { directus_presetsMinOrderByAggregateInput } from './directus-presets-min-order-by-aggregate.input';
import { directus_presetsSumOrderByAggregateInput } from './directus-presets-sum-order-by-aggregate.input';

@InputType()
export class directus_presetsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookmark?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  search?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout_query?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout_options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  refresh_interval?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  filter?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;

  @Field(() => directus_presetsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_presetsCountOrderByAggregateInput;

  @Field(() => directus_presetsAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_presetsAvgOrderByAggregateInput;

  @Field(() => directus_presetsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_presetsMaxOrderByAggregateInput;

  @Field(() => directus_presetsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_presetsMinOrderByAggregateInput;

  @Field(() => directus_presetsSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_presetsSumOrderByAggregateInput;
}
