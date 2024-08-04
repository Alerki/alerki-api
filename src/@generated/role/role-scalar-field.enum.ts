import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
  id = 'id',
}

registerEnumType(RoleScalarFieldEnum, {
  name: 'RoleScalarFieldEnum',
  description: undefined,
});
