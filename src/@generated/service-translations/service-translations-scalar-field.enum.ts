import { registerEnumType } from '@nestjs/graphql';

export enum Service_translationsScalarFieldEnum {
  id = 'id',
  Service_id = 'Service_id',
  languages_id = 'languages_id',
  name = 'name',
}

registerEnumType(Service_translationsScalarFieldEnum, {
  name: 'Service_translationsScalarFieldEnum',
  description: undefined,
});
