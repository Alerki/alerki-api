import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Service_translationsCountOrderByAggregateInput } from './service-translations-count-order-by-aggregate.input';
import { Service_translationsAvgOrderByAggregateInput } from './service-translations-avg-order-by-aggregate.input';
import { Service_translationsMaxOrderByAggregateInput } from './service-translations-max-order-by-aggregate.input';
import { Service_translationsMinOrderByAggregateInput } from './service-translations-min-order-by-aggregate.input';
import { Service_translationsSumOrderByAggregateInput } from './service-translations-sum-order-by-aggregate.input';

@InputType()
export class Service_translationsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  Service_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  languages_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => Service_translationsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: Service_translationsCountOrderByAggregateInput;

  @Field(() => Service_translationsAvgOrderByAggregateInput, { nullable: true })
  _avg?: Service_translationsAvgOrderByAggregateInput;

  @Field(() => Service_translationsMaxOrderByAggregateInput, { nullable: true })
  _max?: Service_translationsMaxOrderByAggregateInput;

  @Field(() => Service_translationsMinOrderByAggregateInput, { nullable: true })
  _min?: Service_translationsMinOrderByAggregateInput;

  @Field(() => Service_translationsSumOrderByAggregateInput, { nullable: true })
  _sum?: Service_translationsSumOrderByAggregateInput;
}
