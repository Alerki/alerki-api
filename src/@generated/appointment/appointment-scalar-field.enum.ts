import { registerEnumType } from '@nestjs/graphql';

export enum AppointmentScalarFieldEnum {
    id = "id",
    date_created = "date_created",
    date_updated = "date_updated",
    masterService = "masterService",
    clientProfile = "clientProfile",
    masterProfile = "masterProfile",
    duration = "duration",
    price = "price",
    currency = "currency",
    startAt = "startAt",
    endAt = "endAt",
    confirmed = "confirmed",
    cancelled = "cancelled"
}


registerEnumType(AppointmentScalarFieldEnum, { name: 'AppointmentScalarFieldEnum', description: undefined })
