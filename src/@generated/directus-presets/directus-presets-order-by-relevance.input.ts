import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsOrderByRelevanceFieldEnum } from './directus-presets-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_presetsOrderByRelevanceInput {

    @Field(() => [directus_presetsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_presetsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
