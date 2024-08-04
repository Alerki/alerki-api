import { registerEnumType } from '@nestjs/graphql';

export enum UserPictureOrderByRelevanceFieldEnum {
  id = 'id',
  picture = 'picture',
}

registerEnumType(UserPictureOrderByRelevanceFieldEnum, {
  name: 'UserPictureOrderByRelevanceFieldEnum',
  description: undefined,
});
