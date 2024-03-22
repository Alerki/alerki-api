import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsOrderByRelevanceFieldEnum } from './service-translations-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class Service_translationsOrderByRelevanceInput {

    @Field(() => [Service_translationsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof Service_translationsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
