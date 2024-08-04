import { registerEnumType } from '@nestjs/graphql';

export enum MasterWeeklyScheduleOrderByRelevanceFieldEnum {
  id = 'id',
  status = 'status',
}

registerEnumType(MasterWeeklyScheduleOrderByRelevanceFieldEnum, {
  name: 'MasterWeeklyScheduleOrderByRelevanceFieldEnum',
  description: undefined,
});
