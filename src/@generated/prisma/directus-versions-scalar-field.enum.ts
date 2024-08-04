import { registerEnumType } from '@nestjs/graphql';

export enum Directus_versionsScalarFieldEnum {
  id = 'id',
  key = 'key',
  name = 'name',
  collection = 'collection',
  item = 'item',
  hash = 'hash',
  date_created = 'date_created',
  date_updated = 'date_updated',
  user_created = 'user_created',
  user_updated = 'user_updated',
}

registerEnumType(Directus_versionsScalarFieldEnum, {
  name: 'Directus_versionsScalarFieldEnum',
  description: undefined,
});
