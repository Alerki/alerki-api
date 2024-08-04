import { registerEnumType } from '@nestjs/graphql';

export enum directus_migrationsOrderByRelevanceFieldEnum {
  version = 'version',
  name = 'name',
}

registerEnumType(directus_migrationsOrderByRelevanceFieldEnum, {
  name: 'directus_migrationsOrderByRelevanceFieldEnum',
  description: undefined,
});
