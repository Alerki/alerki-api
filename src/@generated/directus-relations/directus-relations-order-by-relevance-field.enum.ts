import { registerEnumType } from '@nestjs/graphql';

export enum directus_relationsOrderByRelevanceFieldEnum {
  many_collection = 'many_collection',
  many_field = 'many_field',
  one_collection = 'one_collection',
  one_field = 'one_field',
  one_collection_field = 'one_collection_field',
  one_allowed_collections = 'one_allowed_collections',
  junction_field = 'junction_field',
  sort_field = 'sort_field',
  one_deselect_action = 'one_deselect_action',
}

registerEnumType(directus_relationsOrderByRelevanceFieldEnum, {
  name: 'directus_relationsOrderByRelevanceFieldEnum',
  description: undefined,
});
