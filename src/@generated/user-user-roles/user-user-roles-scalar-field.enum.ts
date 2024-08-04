import { registerEnumType } from '@nestjs/graphql';

export enum User_UserRolesScalarFieldEnum {
  id = 'id',
  User_id = 'User_id',
  UserRoles_id = 'UserRoles_id',
}

registerEnumType(User_UserRolesScalarFieldEnum, {
  name: 'User_UserRolesScalarFieldEnum',
  description: undefined,
});
