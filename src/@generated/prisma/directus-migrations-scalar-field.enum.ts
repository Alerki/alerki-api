import { registerEnumType } from '@nestjs/graphql';

export enum Directus_migrationsScalarFieldEnum {
  version = 'version',
  name = 'name',
  timestamp = 'timestamp',
}

registerEnumType(Directus_migrationsScalarFieldEnum, {
  name: 'Directus_migrationsScalarFieldEnum',
  description: undefined,
});
