import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeOrderByRelevanceFieldEnum {
    user_created = "user_created",
    user_updated = "user_updated",
    name = "name"
}


registerEnumType(NotificationTypeOrderByRelevanceFieldEnum, { name: 'NotificationTypeOrderByRelevanceFieldEnum', description: undefined })
