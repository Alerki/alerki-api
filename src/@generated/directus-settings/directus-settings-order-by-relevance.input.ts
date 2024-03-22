import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsOrderByRelevanceFieldEnum } from './directus-settings-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_settingsOrderByRelevanceInput {

    @Field(() => [directus_settingsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_settingsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
