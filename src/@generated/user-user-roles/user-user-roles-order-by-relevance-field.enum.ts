import { registerEnumType } from '@nestjs/graphql';

export enum User_UserRolesOrderByRelevanceFieldEnum {
  User_id = 'User_id',
  UserRoles_id = 'UserRoles_id',
}

registerEnumType(User_UserRolesOrderByRelevanceFieldEnum, {
  name: 'User_UserRolesOrderByRelevanceFieldEnum',
  description: undefined,
});
