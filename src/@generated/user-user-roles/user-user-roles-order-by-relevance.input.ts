import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesOrderByRelevanceFieldEnum } from './user-user-roles-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class User_UserRolesOrderByRelevanceInput {
  @Field(() => [User_UserRolesOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof User_UserRolesOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
