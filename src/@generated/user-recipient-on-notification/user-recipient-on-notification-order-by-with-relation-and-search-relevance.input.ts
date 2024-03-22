import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationOrderByWithRelationAndSearchRelevanceInput } from '../notification/notification-order-by-with-relation-and-search-relevance.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserRecipientOnNotificationOrderByRelevanceInput } from './user-recipient-on-notification-order-by-relevance.input';

@InputType()
export class UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notification?: keyof typeof SortOrder;

    @Field(() => NotificationOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Notification?: NotificationOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserRecipientOnNotificationOrderByRelevanceInput, {nullable:true})
    _relevance?: UserRecipientOnNotificationOrderByRelevanceInput;
}
