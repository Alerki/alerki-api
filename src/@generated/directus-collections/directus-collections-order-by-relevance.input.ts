import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsOrderByRelevanceFieldEnum } from './directus-collections-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_collectionsOrderByRelevanceInput {
  @Field(() => [directus_collectionsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<keyof typeof directus_collectionsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
