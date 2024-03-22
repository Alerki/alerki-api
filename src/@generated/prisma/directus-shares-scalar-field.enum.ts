import { registerEnumType } from '@nestjs/graphql';

export enum Directus_sharesScalarFieldEnum {
    id = "id",
    name = "name",
    collection = "collection",
    item = "item",
    role = "role",
    password = "password",
    user_created = "user_created",
    date_created = "date_created",
    date_start = "date_start",
    date_end = "date_end",
    times_used = "times_used",
    max_uses = "max_uses"
}


registerEnumType(Directus_sharesScalarFieldEnum, { name: 'Directus_sharesScalarFieldEnum', description: undefined })
