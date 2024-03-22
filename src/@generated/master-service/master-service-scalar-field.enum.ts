import { registerEnumType } from '@nestjs/graphql';

export enum MasterServiceScalarFieldEnum {
    id = "id",
    status = "status",
    date_created = "date_created",
    date_updated = "date_updated",
    masterProfile = "masterProfile",
    duration = "duration",
    price = "price",
    currency = "currency",
    service = "service"
}


registerEnumType(MasterServiceScalarFieldEnum, { name: 'MasterServiceScalarFieldEnum', description: undefined })
