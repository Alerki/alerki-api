import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from '../currency/currency-order-by-with-relation-and-search-relevance.input';
import { MasterProfileOrderByWithRelationAndSearchRelevanceInput } from '../master-profile/master-profile-order-by-with-relation-and-search-relevance.input';
import { Service_translationsOrderByWithRelationAndSearchRelevanceInput } from '../service-translations/service-translations-order-by-with-relation-and-search-relevance.input';
import { MasterServiceOrderByRelevanceInput } from './master-service-order-by-relevance.input';

@InputType()
export class MasterServiceOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    masterProfile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    service?: keyof typeof SortOrder;

    @Field(() => CurrencyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MasterProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    MasterProfile?: MasterProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => Service_translationsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Service_translations?: Service_translationsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MasterServiceOrderByRelevanceInput, {nullable:true})
    _relevance?: MasterServiceOrderByRelevanceInput;
}
