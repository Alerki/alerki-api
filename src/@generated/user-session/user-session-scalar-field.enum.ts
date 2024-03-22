import { registerEnumType } from '@nestjs/graphql';

export enum User_SessionScalarFieldEnum {
    id = "id",
    User_id = "User_id",
    Session_id = "Session_id"
}


registerEnumType(User_SessionScalarFieldEnum, { name: 'User_SessionScalarFieldEnum', description: undefined })
