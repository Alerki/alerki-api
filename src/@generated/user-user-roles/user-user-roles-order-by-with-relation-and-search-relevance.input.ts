import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserRolesOrderByWithRelationAndSearchRelevanceInput } from '../user-roles/user-roles-order-by-with-relation-and-search-relevance.input';
import { User_UserRolesOrderByRelevanceInput } from './user-user-roles-order-by-relevance.input';

@InputType()
export class User_UserRolesOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  User_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  UserRoles_id?: keyof typeof SortOrder;

  @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  User?: UserOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => UserRolesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  UserRoles?: UserRolesOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => User_UserRolesOrderByRelevanceInput, { nullable: true })
  _relevance?: User_UserRolesOrderByRelevanceInput;
}
