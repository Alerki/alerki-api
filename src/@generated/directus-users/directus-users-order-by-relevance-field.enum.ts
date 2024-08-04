import { registerEnumType } from '@nestjs/graphql';

export enum directus_usersOrderByRelevanceFieldEnum {
  id = 'id',
  first_name = 'first_name',
  last_name = 'last_name',
  email = 'email',
  password = 'password',
  location = 'location',
  title = 'title',
  description = 'description',
  avatar = 'avatar',
  language = 'language',
  tfa_secret = 'tfa_secret',
  status = 'status',
  role = 'role',
  token = 'token',
  last_page = 'last_page',
  provider = 'provider',
  external_identifier = 'external_identifier',
  appearance = 'appearance',
  theme_dark = 'theme_dark',
  theme_light = 'theme_light',
}

registerEnumType(directus_usersOrderByRelevanceFieldEnum, {
  name: 'directus_usersOrderByRelevanceFieldEnum',
  description: undefined,
});
