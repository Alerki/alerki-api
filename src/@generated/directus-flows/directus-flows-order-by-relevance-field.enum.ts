import { registerEnumType } from '@nestjs/graphql';

export enum directus_flowsOrderByRelevanceFieldEnum {
  id = 'id',
  name = 'name',
  icon = 'icon',
  color = 'color',
  description = 'description',
  status = 'status',
  trigger = 'trigger',
  accountability = 'accountability',
  operation = 'operation',
  user_created = 'user_created',
}

registerEnumType(directus_flowsOrderByRelevanceFieldEnum, {
  name: 'directus_flowsOrderByRelevanceFieldEnum',
  description: undefined,
});
