import { registerEnumType } from '@nestjs/graphql';

export enum Directus_fieldsScalarFieldEnum {
  id = 'id',
  collection = 'collection',
  field = 'field',
  special = 'special',
  'interface' = 'interface',
  options = 'options',
  display = 'display',
  display_options = 'display_options',
  readonly = 'readonly',
  hidden = 'hidden',
  sort = 'sort',
  width = 'width',
  translations = 'translations',
  note = 'note',
  conditions = 'conditions',
  required = 'required',
  group = 'group',
  validation = 'validation',
  validation_message = 'validation_message',
}

registerEnumType(Directus_fieldsScalarFieldEnum, {
  name: 'Directus_fieldsScalarFieldEnum',
  description: undefined,
});
