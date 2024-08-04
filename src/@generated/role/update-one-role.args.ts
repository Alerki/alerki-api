import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUncheckedUpdateInput } from './role-unchecked-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@ArgsType()
export class UpdateOneRoleArgs {
  @Field(() => RoleUncheckedUpdateInput, { nullable: false })
  @Type(() => RoleUncheckedUpdateInput)
  data!: RoleUncheckedUpdateInput;

  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
