import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_dashboardsOrderByWithRelationAndSearchRelevanceInput } from '../directus-dashboards/directus-dashboards-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_panelsOrderByRelevanceInput } from './directus-panels-order-by-relevance.input';

@InputType()
export class directus_panelsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dashboard?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  icon?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  color?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  show_header?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  note?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_x?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  position_y?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  width?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  height?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  options?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => directus_dashboardsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_dashboards?: directus_dashboardsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_panelsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_panelsOrderByRelevanceInput;
}
