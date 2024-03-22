import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyOrderByRelevanceFieldEnum } from './currency-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CurrencyOrderByRelevanceInput {

    @Field(() => [CurrencyOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CurrencyOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
