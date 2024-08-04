import { registerEnumType } from '@nestjs/graphql';

export enum languagesOrderByRelevanceFieldEnum {
  code = 'code',
  name = 'name',
  direction = 'direction',
}

registerEnumType(languagesOrderByRelevanceFieldEnum, {
  name: 'languagesOrderByRelevanceFieldEnum',
  description: undefined,
});
