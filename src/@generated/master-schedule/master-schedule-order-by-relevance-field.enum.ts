import { registerEnumType } from '@nestjs/graphql';

export enum MasterScheduleOrderByRelevanceFieldEnum {
  id = 'id',
  status = 'status',
  masterProfile = 'masterProfile',
}

registerEnumType(MasterScheduleOrderByRelevanceFieldEnum, {
  name: 'MasterScheduleOrderByRelevanceFieldEnum',
  description: undefined,
});
