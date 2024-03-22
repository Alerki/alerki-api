import { registerEnumType } from '@nestjs/graphql';

export enum directus_permissionsOrderByRelevanceFieldEnum {
    role = "role",
    collection = "collection",
    action = "action",
    fields = "fields"
}


registerEnumType(directus_permissionsOrderByRelevanceFieldEnum, { name: 'directus_permissionsOrderByRelevanceFieldEnum', description: undefined })
