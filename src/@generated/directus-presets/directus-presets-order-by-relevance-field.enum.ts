import { registerEnumType } from '@nestjs/graphql';

export enum directus_presetsOrderByRelevanceFieldEnum {
    bookmark = "bookmark",
    user = "user",
    role = "role",
    collection = "collection",
    search = "search",
    layout = "layout",
    icon = "icon",
    color = "color"
}


registerEnumType(directus_presetsOrderByRelevanceFieldEnum, { name: 'directus_presetsOrderByRelevanceFieldEnum', description: undefined })
