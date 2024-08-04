import { registerEnumType } from '@nestjs/graphql';

export enum MasterWeeklyScheduleScalarFieldEnum {
  id = 'id',
  status = 'status',
  sort = 'sort',
  date_created = 'date_created',
  date_updated = 'date_updated',
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}

registerEnumType(MasterWeeklyScheduleScalarFieldEnum, {
  name: 'MasterWeeklyScheduleScalarFieldEnum',
  description: undefined,
});
