import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypScalarFieldEnum {
  id = 'id',
}

registerEnumType(NotificationTypScalarFieldEnum, {
  name: 'NotificationTypScalarFieldEnum',
  description: undefined,
});
