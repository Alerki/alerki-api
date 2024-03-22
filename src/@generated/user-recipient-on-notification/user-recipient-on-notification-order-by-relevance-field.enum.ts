import { registerEnumType } from '@nestjs/graphql';

export enum UserRecipientOnNotificationOrderByRelevanceFieldEnum {
    id = "id",
    user = "user",
    notification = "notification"
}


registerEnumType(UserRecipientOnNotificationOrderByRelevanceFieldEnum, { name: 'UserRecipientOnNotificationOrderByRelevanceFieldEnum', description: undefined })
