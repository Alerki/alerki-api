import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationOrderByRelevanceFieldEnum } from './user-recipient-on-notification-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserRecipientOnNotificationOrderByRelevanceInput {

    @Field(() => [UserRecipientOnNotificationOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof UserRecipientOnNotificationOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
