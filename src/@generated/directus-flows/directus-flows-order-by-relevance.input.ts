import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsOrderByRelevanceFieldEnum } from './directus-flows-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_flowsOrderByRelevanceInput {
  @Field(() => [directus_flowsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof directus_flowsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
