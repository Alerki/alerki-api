import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { UserRolesCreateWithoutUser_UserRolesInput } from './user-roles-create-without-user-user-roles.input';

@InputType()
export class UserRolesCreateOrConnectWithoutUser_UserRolesInput {
  @Field(() => UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => UserRolesWhereUniqueInput)
  where!: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;

  @Field(() => UserRolesCreateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserRolesCreateWithoutUser_UserRolesInput)
  create!: UserRolesCreateWithoutUser_UserRolesInput;
}
