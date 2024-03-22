import { registerEnumType } from '@nestjs/graphql';

export enum directus_translationsOrderByRelevanceFieldEnum {
    id = "id",
    language = "language",
    key = "key",
    value = "value"
}


registerEnumType(directus_translationsOrderByRelevanceFieldEnum, { name: 'directus_translationsOrderByRelevanceFieldEnum', description: undefined })
