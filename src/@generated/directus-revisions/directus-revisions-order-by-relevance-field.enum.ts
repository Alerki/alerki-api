import { registerEnumType } from '@nestjs/graphql';

export enum directus_revisionsOrderByRelevanceFieldEnum {
    collection = "collection",
    item = "item",
    version = "version"
}


registerEnumType(directus_revisionsOrderByRelevanceFieldEnum, { name: 'directus_revisionsOrderByRelevanceFieldEnum', description: undefined })
