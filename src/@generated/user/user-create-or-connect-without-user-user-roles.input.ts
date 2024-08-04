import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_UserRolesInput } from './user-create-without-user-user-roles.input';

@InputType()
export class UserCreateOrConnectWithoutUser_UserRolesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;

  @Field(() => UserCreateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserCreateWithoutUser_UserRolesInput)
  create!: UserCreateWithoutUser_UserRolesInput;
}
