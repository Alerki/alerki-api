import { registerEnumType } from '@nestjs/graphql';

export enum directus_versionsOrderByRelevanceFieldEnum {
  id = 'id',
  key = 'key',
  name = 'name',
  collection = 'collection',
  item = 'item',
  hash = 'hash',
  user_created = 'user_created',
  user_updated = 'user_updated',
}

registerEnumType(directus_versionsOrderByRelevanceFieldEnum, {
  name: 'directus_versionsOrderByRelevanceFieldEnum',
  description: undefined,
});
