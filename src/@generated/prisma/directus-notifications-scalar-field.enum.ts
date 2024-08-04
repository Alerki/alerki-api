import { registerEnumType } from '@nestjs/graphql';

export enum Directus_notificationsScalarFieldEnum {
  id = 'id',
  timestamp = 'timestamp',
  status = 'status',
  recipient = 'recipient',
  sender = 'sender',
  subject = 'subject',
  message = 'message',
  collection = 'collection',
  item = 'item',
}

registerEnumType(Directus_notificationsScalarFieldEnum, {
  name: 'Directus_notificationsScalarFieldEnum',
  description: undefined,
});
