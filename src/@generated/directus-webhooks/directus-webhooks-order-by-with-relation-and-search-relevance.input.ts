import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_webhooksOrderByRelevanceInput } from './directus-webhooks-order-by-relevance.input';

@InputType()
export class directus_webhooksOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actions?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collections?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    headers?: keyof typeof SortOrder;

    @Field(() => directus_webhooksOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_webhooksOrderByRelevanceInput;
}
