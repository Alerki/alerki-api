import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  email = 'email',
  phoneNumber = 'phoneNumber',
  username = 'username',
  firstName = 'firstName',
  lastName = 'lastName',
  birthDate = 'birthDate',
  picture = 'picture',
  masterProfile = 'masterProfile',
  clientProfile = 'clientProfile',
  password = 'password',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
