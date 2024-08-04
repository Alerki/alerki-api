import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeScalarFieldEnum {
  id = 'id',
  user_created = 'user_created',
  date_created = 'date_created',
  user_updated = 'user_updated',
  date_updated = 'date_updated',
}

registerEnumType(NotificationTypeScalarFieldEnum, {
  name: 'NotificationTypeScalarFieldEnum',
  description: undefined,
});
