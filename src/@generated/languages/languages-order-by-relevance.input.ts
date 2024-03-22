import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesOrderByRelevanceFieldEnum } from './languages-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class languagesOrderByRelevanceInput {

    @Field(() => [languagesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof languagesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
