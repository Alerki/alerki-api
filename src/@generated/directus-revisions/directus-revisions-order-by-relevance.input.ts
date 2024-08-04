import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsOrderByRelevanceFieldEnum } from './directus-revisions-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_revisionsOrderByRelevanceInput {
  @Field(() => [directus_revisionsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<keyof typeof directus_revisionsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
