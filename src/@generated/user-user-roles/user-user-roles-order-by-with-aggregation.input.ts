import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { User_UserRolesCountOrderByAggregateInput } from './user-user-roles-count-order-by-aggregate.input';
import { User_UserRolesAvgOrderByAggregateInput } from './user-user-roles-avg-order-by-aggregate.input';
import { User_UserRolesMaxOrderByAggregateInput } from './user-user-roles-max-order-by-aggregate.input';
import { User_UserRolesMinOrderByAggregateInput } from './user-user-roles-min-order-by-aggregate.input';
import { User_UserRolesSumOrderByAggregateInput } from './user-user-roles-sum-order-by-aggregate.input';

@InputType()
export class User_UserRolesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  User_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  UserRoles_id?: keyof typeof SortOrder;

  @Field(() => User_UserRolesCountOrderByAggregateInput, { nullable: true })
  _count?: User_UserRolesCountOrderByAggregateInput;

  @Field(() => User_UserRolesAvgOrderByAggregateInput, { nullable: true })
  _avg?: User_UserRolesAvgOrderByAggregateInput;

  @Field(() => User_UserRolesMaxOrderByAggregateInput, { nullable: true })
  _max?: User_UserRolesMaxOrderByAggregateInput;

  @Field(() => User_UserRolesMinOrderByAggregateInput, { nullable: true })
  _min?: User_UserRolesMinOrderByAggregateInput;

  @Field(() => User_UserRolesSumOrderByAggregateInput, { nullable: true })
  _sum?: User_UserRolesSumOrderByAggregateInput;
}
