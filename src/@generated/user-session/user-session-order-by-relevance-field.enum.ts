import { registerEnumType } from '@nestjs/graphql';

export enum User_SessionOrderByRelevanceFieldEnum {
  User_id = 'User_id',
  Session_id = 'Session_id',
}

registerEnumType(User_SessionOrderByRelevanceFieldEnum, {
  name: 'User_SessionOrderByRelevanceFieldEnum',
  description: undefined,
});
