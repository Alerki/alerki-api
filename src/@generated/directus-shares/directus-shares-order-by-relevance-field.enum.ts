import { registerEnumType } from '@nestjs/graphql';

export enum directus_sharesOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    collection = "collection",
    item = "item",
    role = "role",
    password = "password",
    user_created = "user_created"
}


registerEnumType(directus_sharesOrderByRelevanceFieldEnum, { name: 'directus_sharesOrderByRelevanceFieldEnum', description: undefined })
