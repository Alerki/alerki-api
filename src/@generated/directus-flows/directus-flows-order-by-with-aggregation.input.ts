import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_flowsCountOrderByAggregateInput } from './directus-flows-count-order-by-aggregate.input';
import { directus_flowsMaxOrderByAggregateInput } from './directus-flows-max-order-by-aggregate.input';
import { directus_flowsMinOrderByAggregateInput } from './directus-flows-min-order-by-aggregate.input';

@InputType()
export class directus_flowsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  trigger?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  accountability?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  operation?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => directus_flowsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_flowsCountOrderByAggregateInput;

  @Field(() => directus_flowsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_flowsMaxOrderByAggregateInput;

  @Field(() => directus_flowsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_flowsMinOrderByAggregateInput;
}
