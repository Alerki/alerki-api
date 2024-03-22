import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    date_created = "date_created",
    date_updated = "date_updated",
    deviceName = "deviceName",
    refreshToken = "refreshToken"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
