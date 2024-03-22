import { registerEnumType } from '@nestjs/graphql';

export enum MasterServiceOrderByRelevanceFieldEnum {
    id = "id",
    status = "status",
    masterProfile = "masterProfile",
    currency = "currency"
}


registerEnumType(MasterServiceOrderByRelevanceFieldEnum, { name: 'MasterServiceOrderByRelevanceFieldEnum', description: undefined })
