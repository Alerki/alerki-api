import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_extensionsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  enabled?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  folder?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  source?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bundle?: keyof typeof SortOrder;
}
