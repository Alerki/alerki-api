import { registerEnumType } from '@nestjs/graphql';

export enum Directus_panelsScalarFieldEnum {
  id = 'id',
  dashboard = 'dashboard',
  name = 'name',
  icon = 'icon',
  color = 'color',
  show_header = 'show_header',
  note = 'note',
  type = 'type',
  position_x = 'position_x',
  position_y = 'position_y',
  width = 'width',
  height = 'height',
  options = 'options',
  date_created = 'date_created',
  user_created = 'user_created',
}

registerEnumType(Directus_panelsScalarFieldEnum, {
  name: 'Directus_panelsScalarFieldEnum',
  description: undefined,
});
