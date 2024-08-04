import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_extensionsOrderByRelevanceFieldEnum } from './directus-extensions-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_extensionsOrderByRelevanceInput {
  @Field(() => [directus_extensionsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<keyof typeof directus_extensionsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
