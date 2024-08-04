import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_SessionInput } from './user-create-without-user-session.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_SessionInput } from './user-create-or-connect-without-user-session.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUser_SessionInput {
  @Field(() => UserCreateWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserCreateWithoutUser_SessionInput)
  create?: UserCreateWithoutUser_SessionInput;

  @Field(() => UserCreateOrConnectWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUser_SessionInput)
  connectOrCreate?: UserCreateOrConnectWithoutUser_SessionInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;
}
