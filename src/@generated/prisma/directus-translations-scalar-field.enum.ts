import { registerEnumType } from '@nestjs/graphql';

export enum Directus_translationsScalarFieldEnum {
    id = "id",
    language = "language",
    key = "key",
    value = "value"
}


registerEnumType(Directus_translationsScalarFieldEnum, { name: 'Directus_translationsScalarFieldEnum', description: undefined })
