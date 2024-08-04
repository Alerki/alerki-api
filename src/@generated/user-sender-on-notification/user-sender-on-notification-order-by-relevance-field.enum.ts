import { registerEnumType } from '@nestjs/graphql';

export enum UserSenderOnNotificationOrderByRelevanceFieldEnum {
  id = 'id',
  user = 'user',
  notification = 'notification',
}

registerEnumType(UserSenderOnNotificationOrderByRelevanceFieldEnum, {
  name: 'UserSenderOnNotificationOrderByRelevanceFieldEnum',
  description: undefined,
});
