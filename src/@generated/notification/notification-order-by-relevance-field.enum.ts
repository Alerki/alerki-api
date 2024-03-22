import { registerEnumType } from '@nestjs/graphql';

export enum NotificationOrderByRelevanceFieldEnum {
    id = "id"
}


registerEnumType(NotificationOrderByRelevanceFieldEnum, { name: 'NotificationOrderByRelevanceFieldEnum', description: undefined })
