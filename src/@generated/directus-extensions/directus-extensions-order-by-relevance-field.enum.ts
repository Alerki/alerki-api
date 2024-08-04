import { registerEnumType } from '@nestjs/graphql';

export enum directus_extensionsOrderByRelevanceFieldEnum {
  id = 'id',
  folder = 'folder',
  source = 'source',
  bundle = 'bundle',
}

registerEnumType(directus_extensionsOrderByRelevanceFieldEnum, {
  name: 'directus_extensionsOrderByRelevanceFieldEnum',
  description: undefined,
});
