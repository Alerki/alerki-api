import { registerEnumType } from '@nestjs/graphql';

export enum Directus_permissionsScalarFieldEnum {
  id = 'id',
  role = 'role',
  collection = 'collection',
  action = 'action',
  permissions = 'permissions',
  validation = 'validation',
  presets = 'presets',
  fields = 'fields',
}

registerEnumType(Directus_permissionsScalarFieldEnum, {
  name: 'Directus_permissionsScalarFieldEnum',
  description: undefined,
});
