import { registerEnumType } from '@nestjs/graphql';

export enum Directus_webhooksScalarFieldEnum {
    id = "id",
    name = "name",
    method = "method",
    url = "url",
    status = "status",
    data = "data",
    actions = "actions",
    collections = "collections",
    headers = "headers"
}


registerEnumType(Directus_webhooksScalarFieldEnum, { name: 'Directus_webhooksScalarFieldEnum', description: undefined })
