import { registerEnumType } from '@nestjs/graphql';

export enum directus_operationsOrderByRelevanceFieldEnum {
  id = 'id',
  name = 'name',
  key = 'key',
  type = 'type',
  resolve = 'resolve',
  reject = 'reject',
  flow = 'flow',
  user_created = 'user_created',
}

registerEnumType(directus_operationsOrderByRelevanceFieldEnum, {
  name: 'directus_operationsOrderByRelevanceFieldEnum',
  description: undefined,
});
