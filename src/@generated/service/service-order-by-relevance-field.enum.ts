import { registerEnumType } from '@nestjs/graphql';

export enum ServiceOrderByRelevanceFieldEnum {
    id = "id",
    status = "status",
    user_created = "user_created",
    user_updated = "user_updated"
}


registerEnumType(ServiceOrderByRelevanceFieldEnum, { name: 'ServiceOrderByRelevanceFieldEnum', description: undefined })
