import { registerEnumType } from '@nestjs/graphql';

export enum MasterProfileScalarFieldEnum {
  id = 'id',
  date_created = 'date_created',
  date_updated = 'date_updated',
  masterWeeklySchedule = 'masterWeeklySchedule',
}

registerEnumType(MasterProfileScalarFieldEnum, {
  name: 'MasterProfileScalarFieldEnum',
  description: undefined,
});
