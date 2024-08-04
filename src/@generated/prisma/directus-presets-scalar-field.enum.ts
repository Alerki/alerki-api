import { registerEnumType } from '@nestjs/graphql';

export enum Directus_presetsScalarFieldEnum {
  id = 'id',
  bookmark = 'bookmark',
  user = 'user',
  role = 'role',
  collection = 'collection',
  search = 'search',
  layout = 'layout',
  layout_query = 'layout_query',
  layout_options = 'layout_options',
  refresh_interval = 'refresh_interval',
  filter = 'filter',
  icon = 'icon',
  color = 'color',
}

registerEnumType(Directus_presetsScalarFieldEnum, {
  name: 'Directus_presetsScalarFieldEnum',
  description: undefined,
});
