import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_revisionsOrderByRelationAggregateInput } from '../directus-revisions/directus-revisions-order-by-relation-aggregate.input';
import { directus_collectionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-collections/directus-collections-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_versionsOrderByRelevanceInput } from './directus-versions-order-by-relevance.input';

@InputType()
export class directus_versionsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_updated?: keyof typeof SortOrder;

  @Field(() => directus_revisionsOrderByRelationAggregateInput, {
    nullable: true,
  })
  directus_revisions?: directus_revisionsOrderByRelationAggregateInput;

  @Field(() => directus_collectionsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_collections?: directus_collectionsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_directus_versions_user_createdTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_directus_versions_user_updatedTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_versionsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_versionsOrderByRelevanceInput;
}
