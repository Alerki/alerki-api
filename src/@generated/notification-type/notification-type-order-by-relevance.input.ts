import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeOrderByRelevanceFieldEnum } from './notification-type-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NotificationTypeOrderByRelevanceInput {

    @Field(() => [NotificationTypeOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof NotificationTypeOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
