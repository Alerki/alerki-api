import { registerEnumType } from '@nestjs/graphql';

export enum directus_collectionsOrderByRelevanceFieldEnum {
  collection = 'collection',
  icon = 'icon',
  note = 'note',
  display_template = 'display_template',
  archive_field = 'archive_field',
  archive_value = 'archive_value',
  unarchive_value = 'unarchive_value',
  sort_field = 'sort_field',
  accountability = 'accountability',
  color = 'color',
  group = 'group',
  collapse = 'collapse',
  preview_url = 'preview_url',
}

registerEnumType(directus_collectionsOrderByRelevanceFieldEnum, {
  name: 'directus_collectionsOrderByRelevanceFieldEnum',
  description: undefined,
});
