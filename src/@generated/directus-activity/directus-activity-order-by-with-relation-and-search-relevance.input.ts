import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_revisionsOrderByRelationAggregateInput } from '../directus-revisions/directus-revisions-order-by-relation-aggregate.input';
import { directus_activityOrderByRelevanceInput } from './directus-activity-order-by-relevance.input';

@InputType()
export class directus_activityOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_agent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    origin?: keyof typeof SortOrder;

    @Field(() => directus_revisionsOrderByRelationAggregateInput, {nullable:true})
    directus_revisions?: directus_revisionsOrderByRelationAggregateInput;

    @Field(() => directus_activityOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_activityOrderByRelevanceInput;
}
