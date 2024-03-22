import { registerEnumType } from '@nestjs/graphql';

export enum SessionOrderByRelevanceFieldEnum {
    id = "id",
    deviceName = "deviceName",
    refreshToken = "refreshToken"
}


registerEnumType(SessionOrderByRelevanceFieldEnum, { name: 'SessionOrderByRelevanceFieldEnum', description: undefined })
