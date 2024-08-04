import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsOrderByRelevanceFieldEnum } from './directus-panels-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_panelsOrderByRelevanceInput {
  @Field(() => [directus_panelsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof directus_panelsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
