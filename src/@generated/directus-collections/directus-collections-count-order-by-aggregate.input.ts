import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_collectionsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  note?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  display_template?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hidden?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  singleton?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  translations?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  archive_field?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  archive_app_filter?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  archive_value?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  unarchive_value?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort_field?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  accountability?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_duplication_fields?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  group?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collapse?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  preview_url?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  versioning?: keyof typeof SortOrder;
}
