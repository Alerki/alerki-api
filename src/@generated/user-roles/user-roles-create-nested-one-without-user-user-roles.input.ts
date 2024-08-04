import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesCreateWithoutUser_UserRolesInput } from './user-roles-create-without-user-user-roles.input';
import { Type } from 'class-transformer';
import { UserRolesCreateOrConnectWithoutUser_UserRolesInput } from './user-roles-create-or-connect-without-user-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';

@InputType()
export class UserRolesCreateNestedOneWithoutUser_UserRolesInput {
  @Field(() => UserRolesCreateWithoutUser_UserRolesInput, { nullable: true })
  @Type(() => UserRolesCreateWithoutUser_UserRolesInput)
  create?: UserRolesCreateWithoutUser_UserRolesInput;

  @Field(() => UserRolesCreateOrConnectWithoutUser_UserRolesInput, {
    nullable: true,
  })
  @Type(() => UserRolesCreateOrConnectWithoutUser_UserRolesInput)
  connectOrCreate?: UserRolesCreateOrConnectWithoutUser_UserRolesInput;

  @Field(() => UserRolesWhereUniqueInput, { nullable: true })
  @Type(() => UserRolesWhereUniqueInput)
  connect?: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;
}
