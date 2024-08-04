import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceOrderByRelevanceFieldEnum } from './service-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServiceOrderByRelevanceInput {
  @Field(() => [ServiceOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof ServiceOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
