import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureOrderByRelevanceFieldEnum } from './user-picture-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserPictureOrderByRelevanceInput {
  @Field(() => [UserPictureOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof UserPictureOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
