import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { User_UserRolesOrderByRelationAggregateInput } from '../user-user-roles/user-user-roles-order-by-relation-aggregate.input';
import { UserRolesOrderByRelevanceInput } from './user-roles-order-by-relevance.input';

@InputType()
export class UserRolesOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => User_UserRolesOrderByRelationAggregateInput, { nullable: true })
  User_UserRoles?: User_UserRolesOrderByRelationAggregateInput;

  @Field(() => UserRolesOrderByRelevanceInput, { nullable: true })
  _relevance?: UserRolesOrderByRelevanceInput;
}
