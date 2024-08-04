import { registerEnumType } from '@nestjs/graphql';

export enum Directus_extensionsScalarFieldEnum {
  enabled = 'enabled',
  id = 'id',
  folder = 'folder',
  source = 'source',
  bundle = 'bundle',
}

registerEnumType(Directus_extensionsScalarFieldEnum, {
  name: 'Directus_extensionsScalarFieldEnum',
  description: undefined,
});
