import { registerEnumType } from '@nestjs/graphql';

export enum NotificationOrderByRelevanceFieldEnum {
  id = 'id',
  type = 'type',
}

registerEnumType(NotificationOrderByRelevanceFieldEnum, {
  name: 'NotificationOrderByRelevanceFieldEnum',
  description: undefined,
});
