import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleUncheckedCreateInput } from './role-unchecked-create.input';
import { RoleUncheckedUpdateInput } from './role-unchecked-update.input';

@ArgsType()
export class UpsertOneRoleArgs {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;

  @Field(() => RoleUncheckedCreateInput, { nullable: false })
  @Type(() => RoleUncheckedCreateInput)
  create!: RoleUncheckedCreateInput;

  @Field(() => RoleUncheckedUpdateInput, { nullable: false })
  @Type(() => RoleUncheckedUpdateInput)
  update!: RoleUncheckedUpdateInput;
}
