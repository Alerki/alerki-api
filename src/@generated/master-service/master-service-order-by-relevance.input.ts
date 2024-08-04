import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceOrderByRelevanceFieldEnum } from './master-service-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MasterServiceOrderByRelevanceInput {
  @Field(() => [MasterServiceOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof MasterServiceOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
