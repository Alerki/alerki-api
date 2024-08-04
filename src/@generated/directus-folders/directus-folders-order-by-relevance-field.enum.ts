import { registerEnumType } from '@nestjs/graphql';

export enum directus_foldersOrderByRelevanceFieldEnum {
  id = 'id',
  name = 'name',
  parent = 'parent',
}

registerEnumType(directus_foldersOrderByRelevanceFieldEnum, {
  name: 'directus_foldersOrderByRelevanceFieldEnum',
  description: undefined,
});
