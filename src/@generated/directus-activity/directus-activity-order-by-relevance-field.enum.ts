import { registerEnumType } from '@nestjs/graphql';

export enum directus_activityOrderByRelevanceFieldEnum {
    action = "action",
    user = "user",
    ip = "ip",
    user_agent = "user_agent",
    collection = "collection",
    item = "item",
    comment = "comment",
    origin = "origin"
}


registerEnumType(directus_activityOrderByRelevanceFieldEnum, { name: 'directus_activityOrderByRelevanceFieldEnum', description: undefined })
