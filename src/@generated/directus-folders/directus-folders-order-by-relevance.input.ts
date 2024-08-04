import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersOrderByRelevanceFieldEnum } from './directus-folders-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_foldersOrderByRelevanceInput {
  @Field(() => [directus_foldersOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof directus_foldersOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
