import { registerEnumType } from '@nestjs/graphql';

export enum directus_panelsOrderByRelevanceFieldEnum {
  id = 'id',
  dashboard = 'dashboard',
  name = 'name',
  icon = 'icon',
  color = 'color',
  note = 'note',
  type = 'type',
  user_created = 'user_created',
}

registerEnumType(directus_panelsOrderByRelevanceFieldEnum, {
  name: 'directus_panelsOrderByRelevanceFieldEnum',
  description: undefined,
});
