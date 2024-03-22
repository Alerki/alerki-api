import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_translationsOrderByRelevanceFieldEnum } from './directus-translations-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_translationsOrderByRelevanceInput {

    @Field(() => [directus_translationsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_translationsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
