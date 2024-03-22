import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeScalarFieldEnum {
    id = "id",
    sort = "sort",
    user_created = "user_created",
    date_created = "date_created",
    user_updated = "user_updated",
    date_updated = "date_updated",
    name = "name"
}


registerEnumType(NotificationTypeScalarFieldEnum, { name: 'NotificationTypeScalarFieldEnum', description: undefined })
