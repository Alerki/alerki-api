import { registerEnumType } from '@nestjs/graphql';

export enum Directus_revisionsScalarFieldEnum {
    id = "id",
    activity = "activity",
    collection = "collection",
    item = "item",
    data = "data",
    delta = "delta",
    parent = "parent",
    version = "version"
}


registerEnumType(Directus_revisionsScalarFieldEnum, { name: 'Directus_revisionsScalarFieldEnum', description: undefined })
