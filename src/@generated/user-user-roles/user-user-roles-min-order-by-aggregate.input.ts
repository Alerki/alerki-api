import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class User_UserRolesMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  User_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  UserRoles_id?: keyof typeof SortOrder;
}
