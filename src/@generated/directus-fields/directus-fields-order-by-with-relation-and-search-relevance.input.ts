import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_fieldsOrderByRelevanceInput } from './directus-fields-order-by-relevance.input';

@InputType()
export class directus_fieldsOrderByWithRelationAndSearchRelevanceInput {
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

  @Field(() => directus_fieldsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_fieldsOrderByRelevanceInput;
}
