import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_filesCountOrderByAggregateInput } from './directus-files-count-order-by-aggregate.input';
import { directus_filesAvgOrderByAggregateInput } from './directus-files-avg-order-by-aggregate.input';
import { directus_filesMaxOrderByAggregateInput } from './directus-files-max-order-by-aggregate.input';
import { directus_filesMinOrderByAggregateInput } from './directus-files-min-order-by-aggregate.input';
import { directus_filesSumOrderByAggregateInput } from './directus-files-sum-order-by-aggregate.input';

@InputType()
export class directus_filesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  storage?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  filename_disk?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  filename_download?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  folder?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uploaded_by?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uploaded_on?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  modified_by?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  modified_on?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  charset?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  filesize?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  width?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  height?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  duration?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  embed?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  location?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tags?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  focal_point_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  focal_point_y?: keyof typeof SortOrder;

  @Field(() => directus_filesCountOrderByAggregateInput, { nullable: true })
  _count?: directus_filesCountOrderByAggregateInput;

  @Field(() => directus_filesAvgOrderByAggregateInput, { nullable: true })
  _avg?: directus_filesAvgOrderByAggregateInput;

  @Field(() => directus_filesMaxOrderByAggregateInput, { nullable: true })
  _max?: directus_filesMaxOrderByAggregateInput;

  @Field(() => directus_filesMinOrderByAggregateInput, { nullable: true })
  _min?: directus_filesMinOrderByAggregateInput;

  @Field(() => directus_filesSumOrderByAggregateInput, { nullable: true })
  _sum?: directus_filesSumOrderByAggregateInput;
}
