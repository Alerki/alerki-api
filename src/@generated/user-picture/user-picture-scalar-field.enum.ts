import { registerEnumType } from '@nestjs/graphql';

export enum UserPictureScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  picture = 'picture',
}

registerEnumType(UserPictureScalarFieldEnum, {
  name: 'UserPictureScalarFieldEnum',
  description: undefined,
});
