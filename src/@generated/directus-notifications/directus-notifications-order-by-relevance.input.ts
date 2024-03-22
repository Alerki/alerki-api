import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_notificationsOrderByRelevanceFieldEnum } from './directus-notifications-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_notificationsOrderByRelevanceInput {

    @Field(() => [directus_notificationsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof directus_notificationsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
