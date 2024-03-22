import { registerEnumType } from '@nestjs/graphql';

export enum UserRolesScalarFieldEnum {
    id = "id",
    date_created = "date_created",
    date_updated = "date_updated",
    name = "name"
}


registerEnumType(UserRolesScalarFieldEnum, { name: 'UserRolesScalarFieldEnum', description: undefined })
