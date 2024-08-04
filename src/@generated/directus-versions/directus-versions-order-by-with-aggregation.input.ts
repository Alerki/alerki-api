import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_versionsCountOrderByAggregateInput } from './directus-versions-count-order-by-aggregate.input';
import { directus_versionsMaxOrderByAggregateInput } from './directus-versions-max-order-by-aggregate.input';
import { directus_versionsMinOrderByAggregateInput } from './directus-versions-min-order-by-aggregate.input';

@InputType()
export class directus_versionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_updated?: keyof typeof SortOrder;

  @Field(() => directus_versionsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_versionsCountOrderByAggregateInput;

  @Field(() => directus_versionsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_versionsMaxOrderByAggregateInput;

  @Field(() => directus_versionsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_versionsMinOrderByAggregateInput;
}
