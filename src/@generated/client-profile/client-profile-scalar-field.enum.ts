import { registerEnumType } from '@nestjs/graphql';

export enum ClientProfileScalarFieldEnum {
    id = "id",
    date_created = "date_created",
    date_updated = "date_updated"
}


registerEnumType(ClientProfileScalarFieldEnum, { name: 'ClientProfileScalarFieldEnum', description: undefined })
