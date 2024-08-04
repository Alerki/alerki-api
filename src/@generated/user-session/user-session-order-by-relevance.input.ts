import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionOrderByRelevanceFieldEnum } from './user-session-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class User_SessionOrderByRelevanceInput {
  @Field(() => [User_SessionOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof User_SessionOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
