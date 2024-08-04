import { registerEnumType } from '@nestjs/graphql';

export enum directus_rolesOrderByRelevanceFieldEnum {
  id = 'id',
  name = 'name',
  icon = 'icon',
  description = 'description',
  ip_access = 'ip_access',
}

registerEnumType(directus_rolesOrderByRelevanceFieldEnum, {
  name: 'directus_rolesOrderByRelevanceFieldEnum',
  description: undefined,
});
