import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUncheckedUpdateManyInput } from './role-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { RoleWhereInput } from './role-where.input';

@ArgsType()
export class UpdateManyRoleArgs {
  @Field(() => RoleUncheckedUpdateManyInput, { nullable: false })
  @Type(() => RoleUncheckedUpdateManyInput)
  data!: RoleUncheckedUpdateManyInput;

  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: RoleWhereInput;
}
