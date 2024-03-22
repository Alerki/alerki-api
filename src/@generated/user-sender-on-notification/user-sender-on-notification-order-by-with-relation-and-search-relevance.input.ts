import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserSenderOnNotificationOrderByRelevanceInput } from './user-sender-on-notification-order-by-relevance.input';

@InputType()
export class UserSenderOnNotificationOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User_UserSenderOnNotification_notificationToUser?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User_UserSenderOnNotification_userToUser?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserSenderOnNotificationOrderByRelevanceInput, {nullable:true})
    _relevance?: UserSenderOnNotificationOrderByRelevanceInput;
}
