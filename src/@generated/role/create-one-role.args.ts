import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUncheckedCreateInput } from './role-unchecked-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRoleArgs {
  @Field(() => RoleUncheckedCreateInput, { nullable: true })
  @Type(() => RoleUncheckedCreateInput)
  data?: RoleUncheckedCreateInput;
}
