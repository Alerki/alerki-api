import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterServiceOrderByRelationAggregateInput } from '../master-service/master-service-order-by-relation-aggregate.input';
import { languagesOrderByWithRelationAndSearchRelevanceInput } from '../languages/languages-order-by-with-relation-and-search-relevance.input';
import { ServiceOrderByWithRelationAndSearchRelevanceInput } from '../service/service-order-by-with-relation-and-search-relevance.input';
import { Service_translationsOrderByRelevanceInput } from './service-translations-order-by-relevance.input';

@InputType()
export class Service_translationsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Service_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languages_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => MasterServiceOrderByRelationAggregateInput, {nullable:true})
    MasterService?: MasterServiceOrderByRelationAggregateInput;

    @Field(() => languagesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    languages?: languagesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => ServiceOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Service?: ServiceOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => Service_translationsOrderByRelevanceInput, {nullable:true})
    _relevance?: Service_translationsOrderByRelevanceInput;
}
