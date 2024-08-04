import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesUpdateInput } from './user-roles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';

@ArgsType()
export class UpdateOneUserRolesArgs {
  @Field(() => UserRolesUpdateInput, { nullable: false })
  @Type(() => UserRolesUpdateInput)
  data!: UserRolesUpdateInput;

  @Field(() => UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => UserRolesWhereUniqueInput)
  where!: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;
}
