import { registerEnumType } from '@nestjs/graphql';

export enum ServiceScalarFieldEnum {
  id = 'id',
  status = 'status',
  sort = 'sort',
  user_created = 'user_created',
  date_created = 'date_created',
  user_updated = 'user_updated',
  date_updated = 'date_updated',
}

registerEnumType(ServiceScalarFieldEnum, {
  name: 'ServiceScalarFieldEnum',
  description: undefined,
});
