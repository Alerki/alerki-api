import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Service_translationsOrderByRelationAggregateInput } from '../service-translations/service-translations-order-by-relation-aggregate.input';
import { languagesOrderByRelevanceInput } from './languages-order-by-relevance.input';

@InputType()
export class languagesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    direction?: keyof typeof SortOrder;

    @Field(() => Service_translationsOrderByRelationAggregateInput, {nullable:true})
    Service_translations?: Service_translationsOrderByRelationAggregateInput;

    @Field(() => languagesOrderByRelevanceInput, {nullable:true})
    _relevance?: languagesOrderByRelevanceInput;
}
