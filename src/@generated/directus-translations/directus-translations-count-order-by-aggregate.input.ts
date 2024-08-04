import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_translationsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  language?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  value?: keyof typeof SortOrder;
}
