import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPictureInput } from './user-create-without-user-picture.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPictureInput } from './user-create-or-connect-without-user-picture.input';
import { UserCreateManyUserPictureInputEnvelope } from './user-create-many-user-picture-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutUserPictureInput {
  @Field(() => [UserCreateWithoutUserPictureInput], { nullable: true })
  @Type(() => UserCreateWithoutUserPictureInput)
  create?: Array<UserCreateWithoutUserPictureInput>;

  @Field(() => [UserCreateOrConnectWithoutUserPictureInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUserPictureInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutUserPictureInput>;

  @Field(() => UserCreateManyUserPictureInputEnvelope, { nullable: true })
  @Type(() => UserCreateManyUserPictureInputEnvelope)
  createMany?: UserCreateManyUserPictureInputEnvelope;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      UserWhereUniqueInput,
      'id' | 'email' | 'phoneNumber' | 'username'
    >
  >;
}
