import { registerEnumType } from '@nestjs/graphql';

export enum directus_fieldsOrderByRelevanceFieldEnum {
  collection = 'collection',
  field = 'field',
  special = 'special',
  'interface' = 'interface',
  display = 'display',
  width = 'width',
  note = 'note',
  group = 'group',
  validation_message = 'validation_message',
}

registerEnumType(directus_fieldsOrderByRelevanceFieldEnum, {
  name: 'directus_fieldsOrderByRelevanceFieldEnum',
  description: undefined,
});
