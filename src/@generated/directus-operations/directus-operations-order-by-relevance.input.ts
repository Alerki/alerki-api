import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsOrderByRelevanceFieldEnum } from './directus-operations-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_operationsOrderByRelevanceInput {

    @Field(() => [directus_operationsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_operationsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
