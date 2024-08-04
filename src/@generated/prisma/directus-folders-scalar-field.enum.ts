import { registerEnumType } from '@nestjs/graphql';

export enum Directus_foldersScalarFieldEnum {
  id = 'id',
  name = 'name',
  parent = 'parent',
}

registerEnumType(Directus_foldersScalarFieldEnum, {
  name: 'Directus_foldersScalarFieldEnum',
  description: undefined,
});
