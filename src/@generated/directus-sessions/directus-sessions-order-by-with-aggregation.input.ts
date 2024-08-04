import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_sessionsCountOrderByAggregateInput } from './directus-sessions-count-order-by-aggregate.input';
import { directus_sessionsMaxOrderByAggregateInput } from './directus-sessions-max-order-by-aggregate.input';
import { directus_sessionsMinOrderByAggregateInput } from './directus-sessions-min-order-by-aggregate.input';

@InputType()
export class directus_sessionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ip?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_agent?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  share?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  origin?: keyof typeof SortOrder;

  @Field(() => directus_sessionsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_sessionsCountOrderByAggregateInput;

  @Field(() => directus_sessionsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_sessionsMaxOrderByAggregateInput;

  @Field(() => directus_sessionsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_sessionsMinOrderByAggregateInput;
}
