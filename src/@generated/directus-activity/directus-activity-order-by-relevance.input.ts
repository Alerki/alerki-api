import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_activityOrderByRelevanceFieldEnum } from './directus-activity-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_activityOrderByRelevanceInput {

    @Field(() => [directus_activityOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_activityOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
