import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  type = 'type',
}

registerEnumType(NotificationScalarFieldEnum, {
  name: 'NotificationScalarFieldEnum',
  description: undefined,
});
