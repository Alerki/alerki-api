import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_fieldsCountOrderByAggregateInput } from './directus-fields-count-order-by-aggregate.input';
import { directus_fieldsAvgOrderByAggregateInput } from './directus-fields-avg-order-by-aggregate.input';
import { directus_fieldsMaxOrderByAggregateInput } from './directus-fields-max-order-by-aggregate.input';
import { directus_fieldsMinOrderByAggregateInput } from './directus-fields-min-order-by-aggregate.input';
import { directus_fieldsSumOrderByAggregateInput } from './directus-fields-sum-order-by-aggregate.input';

@InputType()
export class directus_fieldsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  field?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  special?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  interface?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  display?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  display_options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  readonly?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hidden?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  width?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  translations?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  note?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  conditions?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  required?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  group?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validation?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validation_message?: keyof typeof SortOrder;

  @Field(() => directus_fieldsCountOrderByAggregateInput, { nullable: true })
  _count?: directus_fieldsCountOrderByAggregateInput;

  @Field(() => directus_fieldsAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_fieldsAvgOrderByAggregateInput;

  @Field(() => directus_fieldsMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_fieldsMaxOrderByAggregateInput;

  @Field(() => directus_fieldsMinOrderByAggregateInput, { nullable: true })
  _min?: directus_fieldsMinOrderByAggregateInput;

  @Field(() => directus_fieldsSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_fieldsSumOrderByAggregateInput;
}
