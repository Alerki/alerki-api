import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_operationsAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  position_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_y?: keyof typeof SortOrder;
}
