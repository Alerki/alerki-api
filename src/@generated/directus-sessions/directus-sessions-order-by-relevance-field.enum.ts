import { registerEnumType } from '@nestjs/graphql';

export enum directus_sessionsOrderByRelevanceFieldEnum {
  token = 'token',
  user = 'user',
  ip = 'ip',
  user_agent = 'user_agent',
  share = 'share',
  origin = 'origin',
}

registerEnumType(directus_sessionsOrderByRelevanceFieldEnum, {
  name: 'directus_sessionsOrderByRelevanceFieldEnum',
  description: undefined,
});
