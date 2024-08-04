import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyOrderByRelevanceFieldEnum {
  id = 'id',
  status = 'status',
  user_created = 'user_created',
  user_updated = 'user_updated',
  code = 'code',
  character = 'character',
}

registerEnumType(CurrencyOrderByRelevanceFieldEnum, {
  name: 'CurrencyOrderByRelevanceFieldEnum',
  description: undefined,
});
