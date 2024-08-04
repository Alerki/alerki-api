import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionOrderByRelevanceFieldEnum } from './session-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SessionOrderByRelevanceInput {
  @Field(() => [SessionOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof SessionOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
