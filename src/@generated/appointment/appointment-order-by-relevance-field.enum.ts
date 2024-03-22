import { registerEnumType } from '@nestjs/graphql';

export enum AppointmentOrderByRelevanceFieldEnum {
    id = "id",
    masterService = "masterService",
    clientProfile = "clientProfile",
    masterProfile = "masterProfile",
    currency = "currency"
}


registerEnumType(AppointmentOrderByRelevanceFieldEnum, { name: 'AppointmentOrderByRelevanceFieldEnum', description: undefined })
