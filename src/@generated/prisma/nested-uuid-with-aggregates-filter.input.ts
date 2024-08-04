import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedStringFilter } from './nested-string-filter.input';

@InputType()
export class NestedUuidWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: Array<string>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;

  @Field(() => String, { nullable: true })
  lt?: string;

  @Field(() => String, { nullable: true })
  lte?: string;

  @Field(() => String, { nullable: true })
  gt?: string;

  @Field(() => String, { nullable: true })
  gte?: string;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => NestedUuidWithAggregatesFilter, { nullable: true })
  not?: NestedUuidWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter;

  @Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter;
}
