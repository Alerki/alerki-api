import { registerEnumType } from '@nestjs/graphql';

export enum directus_webhooksOrderByRelevanceFieldEnum {
  name = 'name',
  method = 'method',
  url = 'url',
  status = 'status',
  actions = 'actions',
  collections = 'collections',
}

registerEnumType(directus_webhooksOrderByRelevanceFieldEnum, {
  name: 'directus_webhooksOrderByRelevanceFieldEnum',
  description: undefined,
});
