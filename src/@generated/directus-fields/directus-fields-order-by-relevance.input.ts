import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_fieldsOrderByRelevanceFieldEnum } from './directus-fields-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_fieldsOrderByRelevanceInput {
  @Field(() => [directus_fieldsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof directus_fieldsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
