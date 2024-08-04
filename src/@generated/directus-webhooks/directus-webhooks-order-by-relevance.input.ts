import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_webhooksOrderByRelevanceFieldEnum } from './directus-webhooks-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_webhooksOrderByRelevanceInput {
  @Field(() => [directus_webhooksOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<keyof typeof directus_webhooksOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
