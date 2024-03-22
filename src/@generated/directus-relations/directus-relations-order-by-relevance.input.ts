import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_relationsOrderByRelevanceFieldEnum } from './directus-relations-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_relationsOrderByRelevanceInput {

    @Field(() => [directus_relationsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_relationsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
