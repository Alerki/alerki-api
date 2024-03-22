import { registerEnumType } from '@nestjs/graphql';

export enum Service_translationsOrderByRelevanceFieldEnum {
    Service_id = "Service_id",
    languages_id = "languages_id",
    name = "name"
}


registerEnumType(Service_translationsOrderByRelevanceFieldEnum, { name: 'Service_translationsOrderByRelevanceFieldEnum', description: undefined })
