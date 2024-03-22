import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyScalarFieldEnum {
    id = "id",
    status = "status",
    sort = "sort",
    user_created = "user_created",
    date_created = "date_created",
    user_updated = "user_updated",
    date_updated = "date_updated",
    code = "code",
    character = "character"
}


registerEnumType(CurrencyScalarFieldEnum, { name: 'CurrencyScalarFieldEnum', description: undefined })
