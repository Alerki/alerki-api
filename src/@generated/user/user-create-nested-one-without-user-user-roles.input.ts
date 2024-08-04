import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_UserRolesInput } from './user-create-without-user-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_UserRolesInput } from './user-create-or-connect-without-user-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUser_UserRolesInput {
  @Field(() => UserCreateWithoutUser_UserRolesInput, { nullable: true })
  @Type(() => UserCreateWithoutUser_UserRolesInput)
  create?: UserCreateWithoutUser_UserRolesInput;

  @Field(() => UserCreateOrConnectWithoutUser_UserRolesInput, {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutUser_UserRolesInput)
  connectOrCreate?: UserCreateOrConnectWithoutUser_UserRolesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;
}
