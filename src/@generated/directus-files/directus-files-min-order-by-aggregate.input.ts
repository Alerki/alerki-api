import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_filesMinOrderByAggregateInput {
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
  focal_point_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  focal_point_y?: keyof typeof SortOrder;
}
