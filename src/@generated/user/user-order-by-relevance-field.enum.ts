import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
  id = 'id',
  email = 'email',
  phoneNumber = 'phoneNumber',
  username = 'username',
  firstName = 'firstName',
  lastName = 'lastName',
  picture = 'picture',
  masterProfile = 'masterProfile',
  clientProfile = 'clientProfile',
  password = 'password',
}

registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: 'UserOrderByRelevanceFieldEnum',
  description: undefined,
});
