import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_permissionsCountOrderByAggregateInput } from './directus-permissions-count-order-by-aggregate.input';
import { directus_permissionsAvgOrderByAggregateInput } from './directus-permissions-avg-order-by-aggregate.input';
import { directus_permissionsMaxOrderByAggregateInput } from './directus-permissions-max-order-by-aggregate.input';
import { directus_permissionsMinOrderByAggregateInput } from './directus-permissions-min-order-by-aggregate.input';
import { directus_permissionsSumOrderByAggregateInput } from './directus-permissions-sum-order-by-aggregate.input';

@InputType()
export class directus_permissionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  permissions?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validation?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  presets?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  fields?: keyof typeof SortOrder;

  @Field(() => directus_permissionsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: directus_permissionsCountOrderByAggregateInput;

  @Field(() => directus_permissionsAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_permissionsAvgOrderByAggregateInput;

  @Field(() => directus_permissionsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_permissionsMaxOrderByAggregateInput;

  @Field(() => directus_permissionsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_permissionsMinOrderByAggregateInput;

  @Field(() => directus_permissionsSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_permissionsSumOrderByAggregateInput;
}
