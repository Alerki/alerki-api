import { registerEnumType } from '@nestjs/graphql';

export enum UserRecipientOnNotificationScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  user = 'user',
  notification = 'notification',
}

registerEnumType(UserRecipientOnNotificationScalarFieldEnum, {
  name: 'UserRecipientOnNotificationScalarFieldEnum',
  description: undefined,
});
