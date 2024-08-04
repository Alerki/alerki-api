import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_foldersCountOrderByAggregateInput } from './directus-folders-count-order-by-aggregate.input';
import { directus_foldersMaxOrderByAggregateInput } from './directus-folders-max-order-by-aggregate.input';
import { directus_foldersMinOrderByAggregateInput } from './directus-folders-min-order-by-aggregate.input';

@InputType()
export class directus_foldersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  parent?: keyof typeof SortOrder;

  @Field(() => directus_foldersCountOrderByAggregateInput, { nullable: true })
  _count?: directus_foldersCountOrderByAggregateInput;

  @Field(() => directus_foldersMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_foldersMaxOrderByAggregateInput;

  @Field(() => directus_foldersMinOrderByAggregateInput, { nullable: true })
  _min?: directus_foldersMinOrderByAggregateInput;
}
