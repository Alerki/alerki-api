import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileOrderByRelevanceFieldEnum } from './client-profile-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClientProfileOrderByRelevanceInput {
  @Field(() => [ClientProfileOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof ClientProfileOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
