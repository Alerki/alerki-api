import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_activityOrderByWithRelationAndSearchRelevanceInput } from '../directus-activity/directus-activity-order-by-with-relation-and-search-relevance.input';
import { directus_revisionsOrderByRelationAggregateInput } from './directus-revisions-order-by-relation-aggregate.input';
import { directus_versionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-versions/directus-versions-order-by-with-relation-and-search-relevance.input';
import { directus_revisionsOrderByRelevanceInput } from './directus-revisions-order-by-relevance.input';

@InputType()
export class directus_revisionsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  activity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  data?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  delta?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  parent?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  version?: keyof typeof SortOrder;

  @Field(() => directus_activityOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_activity?: directus_activityOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_revisionsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_revisions?: directus_revisionsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_revisionsOrderByRelationAggregateInput, {
    nullable: true,
  })
  other_directus_revisions?: directus_revisionsOrderByRelationAggregateInput;

  @Field(() => directus_versionsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_versions?: directus_versionsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_revisionsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_revisionsOrderByRelevanceInput;
}
