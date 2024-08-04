import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_rolesCountOrderByAggregateInput } from './directus-roles-count-order-by-aggregate.input';
import { directus_rolesMaxOrderByAggregateInput } from './directus-roles-max-order-by-aggregate.input';
import { directus_rolesMinOrderByAggregateInput } from './directus-roles-min-order-by-aggregate.input';

@InputType()
export class directus_rolesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ip_access?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  enforce_tfa?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  admin_access?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  app_access?: keyof typeof SortOrder;

  @Field(() => directus_rolesCountOrderByAggregateInput, { nullable: true })
  _count?: directus_rolesCountOrderByAggregateInput;

  @Field(() => directus_rolesMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_rolesMaxOrderByAggregateInput;

  @Field(() => directus_rolesMinOrderByAggregateInput, { nullable: true })
  _min?: directus_rolesMinOrderByAggregateInput;
}
