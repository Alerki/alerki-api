import { registerEnumType } from '@nestjs/graphql';

export enum UserSenderOnNotificationScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  user = 'user',
  notification = 'notification',
}

registerEnumType(UserSenderOnNotificationScalarFieldEnum, {
  name: 'UserSenderOnNotificationScalarFieldEnum',
  description: undefined,
});
