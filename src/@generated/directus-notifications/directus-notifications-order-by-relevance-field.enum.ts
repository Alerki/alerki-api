import { registerEnumType } from '@nestjs/graphql';

export enum directus_notificationsOrderByRelevanceFieldEnum {
    status = "status",
    recipient = "recipient",
    sender = "sender",
    subject = "subject",
    message = "message",
    collection = "collection",
    item = "item"
}


registerEnumType(directus_notificationsOrderByRelevanceFieldEnum, { name: 'directus_notificationsOrderByRelevanceFieldEnum', description: undefined })
