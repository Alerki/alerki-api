import { registerEnumType } from '@nestjs/graphql';

export enum directus_dashboardsOrderByRelevanceFieldEnum {
  id = 'id',
  name = 'name',
  icon = 'icon',
  note = 'note',
  user_created = 'user_created',
  color = 'color',
}

registerEnumType(directus_dashboardsOrderByRelevanceFieldEnum, {
  name: 'directus_dashboardsOrderByRelevanceFieldEnum',
  description: undefined,
});
