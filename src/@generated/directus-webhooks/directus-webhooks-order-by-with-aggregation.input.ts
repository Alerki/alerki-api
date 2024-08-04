import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_webhooksCountOrderByAggregateInput } from './directus-webhooks-count-order-by-aggregate.input';
import { directus_webhooksAvgOrderByAggregateInput } from './directus-webhooks-avg-order-by-aggregate.input';
import { directus_webhooksMaxOrderByAggregateInput } from './directus-webhooks-max-order-by-aggregate.input';
import { directus_webhooksMinOrderByAggregateInput } from './directus-webhooks-min-order-by-aggregate.input';
import { directus_webhooksSumOrderByAggregateInput } from './directus-webhooks-sum-order-by-aggregate.input';

@InputType()
export class directus_webhooksOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  method?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  data?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  actions?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collections?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  headers?: keyof typeof SortOrder;

  @Field(() => directus_webhooksCountOrderByAggregateInput, { nullable: true })
  _count?: directus_webhooksCountOrderByAggregateInput;

  @Field(() => directus_webhooksAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_webhooksAvgOrderByAggregateInput;

  @Field(() => directus_webhooksMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_webhooksMaxOrderByAggregateInput;

  @Field(() => directus_webhooksMinOrderByAggregateInput, { nullable: true })
  _min?: directus_webhooksMinOrderByAggregateInput;

  @Field(() => directus_webhooksSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_webhooksSumOrderByAggregateInput;
}
