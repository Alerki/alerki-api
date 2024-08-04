import { registerEnumType } from '@nestjs/graphql';

export enum Directus_operationsScalarFieldEnum {
  id = 'id',
  name = 'name',
  key = 'key',
  type = 'type',
  position_x = 'position_x',
  position_y = 'position_y',
  options = 'options',
  resolve = 'resolve',
  reject = 'reject',
  flow = 'flow',
  date_created = 'date_created',
  user_created = 'user_created',
}

registerEnumType(Directus_operationsScalarFieldEnum, {
  name: 'Directus_operationsScalarFieldEnum',
  description: undefined,
});
