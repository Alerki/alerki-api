import { registerEnumType } from '@nestjs/graphql';

export enum ClientProfileOrderByRelevanceFieldEnum {
    id = "id"
}


registerEnumType(ClientProfileOrderByRelevanceFieldEnum, { name: 'ClientProfileOrderByRelevanceFieldEnum', description: undefined })
