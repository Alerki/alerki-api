import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationOrderByRelevanceFieldEnum } from './notification-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NotificationOrderByRelevanceInput {

    @Field(() => [NotificationOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof NotificationOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
