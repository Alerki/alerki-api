import { registerEnumType } from '@nestjs/graphql';

export enum UserRolesOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(UserRolesOrderByRelevanceFieldEnum, { name: 'UserRolesOrderByRelevanceFieldEnum', description: undefined })
