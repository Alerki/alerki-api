import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsOrderByRelevanceFieldEnum } from './directus-dashboards-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_dashboardsOrderByRelevanceInput {

    @Field(() => [directus_dashboardsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_dashboardsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
