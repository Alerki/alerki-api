import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_presetsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookmark?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  search?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout_query?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout_options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  refresh_interval?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  filter?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;
}
