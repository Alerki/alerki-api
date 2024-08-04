import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPictureInput } from './user-create-without-user-picture.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPictureInput } from './user-create-or-connect-without-user-picture.input';
import { UserUpsertWithWhereUniqueWithoutUserPictureInput } from './user-upsert-with-where-unique-without-user-picture.input';
import { UserCreateManyUserPictureInputEnvelope } from './user-create-many-user-picture-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutUserPictureInput } from './user-update-with-where-unique-without-user-picture.input';
import { UserUpdateManyWithWhereWithoutUserPictureInput } from './user-update-many-with-where-without-user-picture.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutUserPictureNestedInput {
  @Field(() => [UserCreateWithoutUserPictureInput], { nullable: true })
  @Type(() => UserCreateWithoutUserPictureInput)
  create?: Array<UserCreateWithoutUserPictureInput>;

  @Field(() => [UserCreateOrConnectWithoutUserPictureInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUserPictureInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutUserPictureInput>;

  @Field(() => [UserUpsertWithWhereUniqueWithoutUserPictureInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutUserPictureInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutUserPictureInput>;

  @Field(() => UserCreateManyUserPictureInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyUserPictureInputEnvelope)
  createMany?: UserCreateManyUserPictureInputEnvelope;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;

  @Field(() => [UserUpdateWithWhereUniqueWithoutUserPictureInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutUserPictureInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutUserPictureInput>;

  @Field(() => [UserUpdateManyWithWhereWithoutUserPictureInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutUserPictureInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutUserPictureInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}
