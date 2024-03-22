import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_collectionsOrderByRelationAggregateInput } from './directus-collections-order-by-relation-aggregate.input';
import { directus_sharesOrderByRelationAggregateInput } from '../directus-shares/directus-shares-order-by-relation-aggregate.input';
import { directus_versionsOrderByRelationAggregateInput } from '../directus-versions/directus-versions-order-by-relation-aggregate.input';
import { directus_collectionsOrderByRelevanceInput } from './directus-collections-order-by-relevance.input';

@InputType()
export class directus_collectionsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    display_template?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hidden?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    singleton?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    translations?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    archive_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    archive_app_filter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    archive_value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unarchive_value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountability?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_duplication_fields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collapse?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    preview_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    versioning?: keyof typeof SortOrder;

    @Field(() => directus_collectionsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_collections?: directus_collectionsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_collectionsOrderByRelationAggregateInput, {nullable:true})
    other_directus_collections?: directus_collectionsOrderByRelationAggregateInput;

    @Field(() => directus_sharesOrderByRelationAggregateInput, {nullable:true})
    directus_shares?: directus_sharesOrderByRelationAggregateInput;

    @Field(() => directus_versionsOrderByRelationAggregateInput, {nullable:true})
    directus_versions?: directus_versionsOrderByRelationAggregateInput;

    @Field(() => directus_collectionsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_collectionsOrderByRelevanceInput;
}
