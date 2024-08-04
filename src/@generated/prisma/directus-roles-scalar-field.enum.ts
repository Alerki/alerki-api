import { registerEnumType } from '@nestjs/graphql';

export enum Directus_rolesScalarFieldEnum {
  id = 'id',
  name = 'name',
  icon = 'icon',
  description = 'description',
  ip_access = 'ip_access',
  enforce_tfa = 'enforce_tfa',
  admin_access = 'admin_access',
  app_access = 'app_access',
}

registerEnumType(Directus_rolesScalarFieldEnum, {
  name: 'Directus_rolesScalarFieldEnum',
  description: undefined,
});
