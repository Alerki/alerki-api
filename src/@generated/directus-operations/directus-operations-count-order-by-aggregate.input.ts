import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_operationsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_y?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  resolve?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  reject?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  flow?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;
}
