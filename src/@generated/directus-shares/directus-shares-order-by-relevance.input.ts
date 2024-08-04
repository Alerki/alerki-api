import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesOrderByRelevanceFieldEnum } from './directus-shares-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_sharesOrderByRelevanceInput {
  @Field(() => [directus_sharesOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof directus_sharesOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
