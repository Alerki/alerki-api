import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeOrderByRelevanceFieldEnum {
  id = 'id',
  user_created = 'user_created',
  user_updated = 'user_updated',
}

registerEnumType(NotificationTypeOrderByRelevanceFieldEnum, {
  name: 'NotificationTypeOrderByRelevanceFieldEnum',
  description: undefined,
});
