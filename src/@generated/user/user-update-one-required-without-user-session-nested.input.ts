import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_SessionInput } from './user-create-without-user-session.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_SessionInput } from './user-create-or-connect-without-user-session.input';
import { UserUpsertWithoutUser_SessionInput } from './user-upsert-without-user-session.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUser_SessionInput } from './user-update-without-user-session.input';

@InputType()
export class UserUpdateOneRequiredWithoutUser_SessionNestedInput {
  @Field(() => UserCreateWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserCreateWithoutUser_SessionInput)
  create?: UserCreateWithoutUser_SessionInput;

  @Field(() => UserCreateOrConnectWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUser_SessionInput)
  connectOrCreate?: UserCreateOrConnectWithoutUser_SessionInput;

  @Field(() => UserUpsertWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserUpsertWithoutUser_SessionInput)
  upsert?: UserUpsertWithoutUser_SessionInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;

  @Field(() => UserUpdateWithoutUser_SessionInput, { nullable: true })
  @Type(() => UserUpdateWithoutUser_SessionInput)
  update?: UserUpdateWithoutUser_SessionInput;
}
