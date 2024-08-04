import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRolesCountOrderByAggregateInput } from './user-roles-count-order-by-aggregate.input';
import { UserRolesMaxOrderByAggregateInput } from './user-roles-max-order-by-aggregate.input';
import { UserRolesMinOrderByAggregateInput } from './user-roles-min-order-by-aggregate.input';

@InputType()
export class UserRolesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => UserRolesCountOrderByAggregateInput, { nullable: true })
  _count?: UserRolesCountOrderByAggregateInput;

  @Field(() => UserRolesMaxOrderByAggregateInput, { nullable: true })
  _max?: UserRolesMaxOrderByAggregateInput;

  @Field(() => UserRolesMinOrderByAggregateInput, { nullable: true })
  _min?: UserRolesMinOrderByAggregateInput;
}
